import Api, { ApiEntityMap, ApiPathName } from '../../api';
import Utilities from '../../utilities';
import ApiProxy from '../../apiProxy';

const logger = Utilities.logger.getServicesLogger('user/');
const LOGGER_USER_SERVICES_GET_LIMIT_MAX = 'getLimitMax';


type SelectableField<T> =
	| keyof T
	| {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${string}` : never;
}[keyof T];


interface Filter {
	key: string;
	value: string;
}

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


interface ApiProxyParameters {
	pagination: Pagination;
	options: Options;
	filters?: Filters;
}

const ServicesUser = {
	getListProxy: async (parameters: ApiProxyParameters) => {
		logger.debug(`proxy/get/list: ${parameters}`);
		const getUsersResponse = await ApiProxy.getList(ApiPathName.USERS, parameters);
		logger.debug(`proxy/get/list: response ${getUsersResponse}`);
		return getUsersResponse;
	},

	getList: async <K extends keyof ApiEntityMap, T>(parameters: {
		selectedFields: readonly SelectableField<T>[];
		limitMax?: number;
		skip?: number;
		filter?: Filter;
	}): Promise<ApiEntityMap[K]> => {

		logger.debug(`get/list parameters: ${parameters}`);
		const { selectedFields, limitMax, skip, filter } = parameters;

		const usersGetListApiResponse = await Api.getList({
			pathName: ApiPathName.USERS,
			selectedFields,
			limitMax,
			skip,
			filter
		});

		logger.debug(`get/list response: ${usersGetListApiResponse}`);

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