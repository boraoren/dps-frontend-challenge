import data from './data.json';
import UserDomain from './index.domain';
import Utilities from '../../utilities';

const logger = Utilities.logger.getDatabase('users/');

interface Concat {
	values: string[];
	to: string;
}
interface Options {
	select: string[];
	concat?: Concat[];
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


interface GetUsersResponse{
	users: UserDomain[];
	total: number;
	skip: number;
	limit: number;
}

const DatabaseUsers = {
	getUsers: (pagination: Pagination, options: Options, filters?: Filters):GetUsersResponse => {
		const { limit = 30, skip = 0 } = pagination;

		let users = [...data.users];
		users = users.sort((userA, userB) => userA.id - userB.id); //userA.firstName.localeCompare(userB.firstName));

		if (filters) {

			//set oldest per city
			if (filters.oldestPerCity) {
				users = DatabaseUsers.setOldestPerCity(users);
			}
			//filter for name and city
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

		//projection
		users = users.map((user) => {
			let select: string[] = [];
			if (filters && filters?.oldestPerCity) {
				select = options.select.concat([OptionFlag.isOldest]);
			} else {
				select = options.select;
			}

			return select.reduce((newField, selectedFields) => {
				const [parentSelectedField, nestedSelectedField] = selectedFields.toString().split('.');
				let userParentPropertyValue = (user as Record<string, unknown>)[parentSelectedField];
				if (nestedSelectedField && typeof userParentPropertyValue === 'object' && userParentPropertyValue !== null) {
					(newField as Record<string, unknown>)[nestedSelectedField] = (userParentPropertyValue as Record<string, unknown>)[nestedSelectedField];
				} else {
					/* Begin related to
						https://github.com/boraoren/dps-frontend-challenge/issues/43
						https://github.com/boraoren/dps-frontend-challenge/issues/53
					 */
					if(parentSelectedField === 'birthDate'){
						const date = new Date(userParentPropertyValue as string);
						userParentPropertyValue  = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
					}
					/* End related to */
					(newField as Record<string, unknown>)[parentSelectedField] = userParentPropertyValue;
				}

				return newField;
			}, {} as Partial<UserDomain>);

		}) as UserDomain[];

		const total = users.length;
		users = DatabaseUsers.concatFields(users, options);
		users = DatabaseUsers.skipUsers(skip, users);
		users = DatabaseUsers.limitUsers(limit, users);

		logger.debug('users: ', users);

		return { users, total, skip, limit: users.length };
	},
	limitUsers: (limit: number, users: UserDomain[]) => {
		return limit === 0 || limit > users.length ? users : users.slice(0, limit);
	},
	skipUsers: (skip: number, users: UserDomain[]) => {
		return users.slice(skip);
	},
	//TODO optimize
	setOldestPerCity: (users: UserDomain[]) => {
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

		logger.debug(`oldest users per city: `, Array.from(oldestMap));

		return users;
	},

	concatFields: (users: UserDomain[], options: Options) => {


		if (options.concat) {
			options.concat.forEach((item) => {
				users = users.map((user) => {
					//TODO fix type
					const mergedValue = item.values.map((key) => user[key]).join(' ');
					const rest = Object.fromEntries(
						Object.entries(user).filter(([key]) => !item.values.includes(key))
					);

					return {
						...rest,
						[item.to]: mergedValue
					};
				}) as UserDomain[];
			});
		}

		logger.debug(`concat users: `, users);

		return users;
	}
};


export default DatabaseUsers;