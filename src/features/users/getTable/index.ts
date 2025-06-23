import Services from '../../../services';
import UserDomain from '../../../services/User/index.domain.ts';
import Utilities from '../../../utilities';

const logger = Utilities.logger.getFeaturesLogger();
const LOGGER_USERS_GET_TABLE = 'users/get/table';

interface Filter {
	key: string;
	value: string;
}

//TODO fix type
const FeaturesUsersGetTable = <const K extends readonly (keyof UserDomain)[]
>(parameters: {
	selectedFields: K,
	limit?: number,
	skip?: number,
	filter?: Filter
}):(() => Promise<{
	pagination: {
		limit: number;
		skip: number;
		total: number;
	};
	tableHeaders: K;
	tableListItems: {
		values: (UserDomain[K[number]])[];
	}[];
}>) => {

	logger.debug(LOGGER_USERS_GET_TABLE, { parameters });

	//TODO fix type
	return async () => {

		const limitMax = parameters.limit ?? await Services.user.getLimitMax();

		const apiResponse = await Services.user.getList({
			selectedFields: parameters.selectedFields,
			limitMax,
			skip: parameters.skip,
			filter: parameters.filter
		});

		const {users, limit,skip,total} = apiResponse;


		const tableHeaders = parameters.selectedFields.map(field => {
			const parts = field.split('.');
			return parts[parts.length - 1];
		});

		const tableListItems = users.map((user) => {
			return {
				values: tableHeaders.map((header) => {
					//TODO fix type
					return user[header];
				})
			};
		});

		return {
			tableHeaders,
			tableListItems,
			pagination: {
				limit,
				skip,
				total
			}
		};
	};
};


export default FeaturesUsersGetTable;