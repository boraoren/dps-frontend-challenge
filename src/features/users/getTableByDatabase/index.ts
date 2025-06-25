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

	const tableHeaders =Object.entries(users[0])
		.filter(([key, value]) =>
			key !== 'isOldest' && value !== null && value !== undefined && value !== false && value !== ''
		)
		.map(([key]) => key);

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

export default FeaturesUsersGetTableByDatabase;