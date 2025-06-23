import Api, { ApiEntityMap, ApiPathName } from '../../api';
import Utilities from '../../utilities';

const logger = Utilities.logger.getServicesLogger();
const LOGGER_USER_SERVICES_GET_LIST = 'services/user/get/list';
const LOGGER_USER_SERVICES_GET_LIMIT_MAX = 'services/user/getLimitMax';


type SelectableField<T> =
	| keyof T
	| {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${string}` : never;
}[keyof T];


interface Filter {
	key: string;
	value: string;
}


const ServicesUser = {
	getList:  async <K extends keyof ApiEntityMap, T>(parameters: {
		selectedFields: readonly SelectableField<T>[];
		limitMax?: number;
		skip?: number;
		filter?: Filter;
	}): Promise<ApiEntityMap[K]> => {

		logger.debug({ parameters }, LOGGER_USER_SERVICES_GET_LIST);
		const { selectedFields, limitMax, skip, filter } = parameters;

		const usersGetListApiResponse = await Api.getList({
			pathName: ApiPathName.USERS,
			selectedFields,
			limitMax,
			skip,
			filter
		});

		logger.debug({  usersGetListApiResponse }, LOGGER_USER_SERVICES_GET_LIST);

		return usersGetListApiResponse;
	},
	getLimitMax: async () => {
		const selectedFields = ['id'];
		const limitMax = 1;

		logger.debug({ selectedFields, limitMax }, LOGGER_USER_SERVICES_GET_LIMIT_MAX);

		const userGetLimitApiResponse = await Api.getList({
			pathName: ApiPathName.USERS,
			selectedFields,
			limitMax
		});
		return userGetLimitApiResponse.total;
	}
};

export default ServicesUser;