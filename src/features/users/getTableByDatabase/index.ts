import Services from '../../../services';
import { OptionFlag } from '../../../services/Database/database.ts';

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


const FeaturesUsersGetTableByDatabase = (pagination: Pagination, options: Options, filters?: Filters) => {
	const getListFromDatabaseResponse = Services.user.getListFromDatabase(pagination,
		options,
		filters);

	const users = getListFromDatabaseResponse.users;

	const tableHeaders = options.select.map(field => {
		const parts = field.split('.');
		return parts[parts.length - 1];
	});

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