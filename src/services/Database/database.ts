import data from './database.json';
import UserDomain from '../User/index.domain.ts';

interface Options {
	select: string[];
}

interface Filters {
	name?: string;
	city?: string;
	oldestPerCity?: boolean;
}

interface Pagination {
	limit: number;
	skip?: number;
}

export enum OptionFlag {
	isOldest = 'isOldest'
}

const Database = {
	getUsers: (pagination: Pagination, options: Options, filters?: Filters) => {
		const { limit = 30, skip = 0 } = pagination;


		let users = [...data.users];

		if (filters) {

			if (filters.oldestPerCity) {
				users = Database.getOldestPerCity(users);
			}

			users = users.filter((user) => {
				const hasName = typeof filters.name === 'string';
				const hasCity = typeof filters.city === 'string';

				const matchesName = hasName && (
					user.firstName.includes(filters.name!) ||
					user.lastName.includes(filters.name!) ||
					user.email.includes(filters.name!) ||
					user.username.includes(filters.name!)
				);

				const matchesCity = hasCity && user.address.city.includes(filters.city!);

				if (!hasName && !hasCity) return true;
				if (hasName && hasCity) return matchesName && matchesCity;
				if (hasName) return matchesName;
				if (hasCity) return matchesCity;

				return false;
			});

		}


		users = users.map((item) => {
			let select: string[] = [];
			if (filters && filters?.oldestPerCity) {
				select = options.select.concat([OptionFlag.isOldest]);
			}else{
				select = options.select;
			}

			return select.reduce((acc, field) => {
				const [top, nested] = field.toString().split('.');
				const topValue = (item as Record<string, unknown>)[top];
				if (nested && typeof topValue === 'object' && topValue !== null) {
					(acc as Record<string, unknown>)[nested] = (topValue as Record<string, unknown>)[nested];
				} else {
					(acc as Record<string, unknown>)[top] = topValue;
				}

				return acc;
			}, {} as Partial<UserDomain>);

		}) as UserDomain[];

		users = Database.limitUsers(limit, users);
		users = Database.skipUsers(skip, users);

		const total = users.length;
		return { users, total, skip, limit: users.length };
	},
	limitUsers: (limit: number, users: UserDomain[]) => {
		return limit === 0 || limit > users.length ? users : users.slice(0, limit);
	},
	skipUsers: (skip: number, users: UserDomain[]) => {
		return users.slice(skip);
	},
	getOldestPerCity: (users: UserDomain[]) => {
		const oldestMap = new Map<string, UserDomain>();

		users.forEach(user => {
			const city = user.address.city;
			const existing = oldestMap.get(city);

			if (
				!existing ||
				new Date(user.birthDate).getTime() < new Date(existing.birthDate).getTime()
			) {
				oldestMap.set(city, user);
			}
		});


		users = users.map(user => ({
			...user,
			[OptionFlag.isOldest]: oldestMap.get(user.address.city)?.id === user.id
		}));

		return users;
	}
};


export default Database;