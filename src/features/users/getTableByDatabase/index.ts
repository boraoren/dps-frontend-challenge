import Services from '../../../services';

interface Concat {
	values: string[];
	to: string;
}
interface Options {
	select: string[];
	concat?: Concat[]
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

const FeaturesUsersGetTableByDatabase = (pagination: Pagination, options: Options, filters?: Filters) => {
	const getListFromDatabaseResponse = Services.user.getListFromDatabase(pagination,
		options,
		filters);

	const users = getListFromDatabaseResponse.users;
	let tableHeaders:string[] = [];

	//TODO make it clean
	if(users.length === 0){
		tableHeaders = transformFields(options.select, options);
	}else {

		tableHeaders = Object.entries(users[0])
			.filter(([key, value]) =>
				key !== 'isOldest' && value !== null && value !== undefined && value !== false && value !== ''
			)
			.map(([key]) => key);
	}

	const tableListItems = users.map((user) => {
		return {
			isOldest: user.isOldest,
			values: tableHeaders.map((header) => {
				//TODO fix type
				return user[header];
			},
			)

		};
	});

	return {
		tableHeaders,
		tableListItems,
		pagination: {
			limit: getListFromDatabaseResponse.limit,
			skip: getListFromDatabaseResponse.skip,
			total: getListFromDatabaseResponse.total
		}
	};


};


const  transformFields = (fields: string[], options: {
	select: string[],
	concat: { values: string[], to: string }[]
}): string[] => {
	const concatMap = new Map<string, string>();

	// Map every source field in concat.values to its .to field
	options.concat.forEach(({ values, to }) => {
		values.forEach(value => concatMap.set(value, to));
	});

	const result = new Set<string>();

	for (const field of fields) {
		// If it's mapped in concat, use the .to value
		if (concatMap.has(field)) {
			result.add(concatMap.get(field)!);
		}
		// If it's a nested field like 'address.city', take 'city'
		else if (field.includes('.')) {
			const parts = field.split('.');
			result.add(parts[1]);
		}
		// Otherwise keep as is
		else {
			result.add(field);
		}
	}

	return Array.from(result);
};


export default FeaturesUsersGetTableByDatabase;