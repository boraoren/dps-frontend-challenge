import UserDomain from '../services/User/index.domain.ts';
import Utilities from '../utilities';

export enum ApiPathName {
	USERS = 'users',
}

const logger = Utilities.logger.getApiLogger();
const LOGGER_API_GET_LIST = 'api/get/list';


type ApiResponse<K extends string, T> = {
	[key in K]: T[];
} & {
	total: number;
	skip: number;
	limit: number;
};

export interface ApiEntityMap {
	users: ApiResponse<'users', UserDomain>;
	//...
}

type SelectableField<T> =
	| keyof T
	| {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${string}` : never;
}[keyof T];

interface Filter {
	key: string;
	value: string;
}


const Api = {
	getList: async <K extends keyof ApiEntityMap, T>(parameters: {
		pathName: K;
		selectedFields: readonly SelectableField<T>[];
		limitMax?: number;
		skip?: number;
		filter?: Filter;
	}): Promise<ApiEntityMap[K]> => {
		const {
			pathName,
			selectedFields,
			limitMax = 1,
			skip = 0,
			filter
		} = parameters;
		try {

			logger.debug({parameters}, LOGGER_API_GET_LIST);

			const url = new URL(`https://dummyjson.com/${pathName}`);
			const topLevelFields = [...new Set(selectedFields.map(f => f.toString().split('.')[0]))];
			url.searchParams.set('select', topLevelFields.join(','));
			url.searchParams.set('limit', limitMax?.toString());
			url.searchParams.set('skip', skip.toString());

			//Filter
			//https://dummyjson.com/users/filter?limit=1&skip=0&key=address.city&value=Denver&select=id,firstName
			if (filter) {
				url.searchParams.set('key', filter.key);
				url.searchParams.set('value', filter.value);
				url.pathname = `${url.pathname}/filter`;
			}

			logger.debug({url}, LOGGER_API_GET_LIST);

			const res = await fetch(url.toString());
			if (!res.ok) {
				const errorMessage = `Failed to fetch ${pathName}: ${res.statusText}`;
				logger.error(errorMessage);
				throw new Error(errorMessage);
			}
			const json = await res.json() as ApiEntityMap[K];
			json[pathName] = (json[pathName] as unknown[]).map((item) => {
				return selectedFields.reduce((acc, field) => {
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

			logger.debug({json}, LOGGER_API_GET_LIST);

			return json;

		} catch (exception) {
			const errorMessage = `Failed to fetch ${pathName}: ${exception}`;
			logger.error(errorMessage);
			throw new Error(errorMessage);
		}
	}
};

export default Api;