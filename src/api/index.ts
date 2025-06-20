import UserDomain from '../services/User/index.domain.ts';

export enum ApiPathName {
	USERS = 'users'
}

type ApiResponse<K extends string, T> = {
	[key in K]: T[];
} & {
	total: number;
	skip: number;
	limit: number;
};

interface ApiEntityMap {
	users: ApiResponse<'users', UserDomain>;
}

const Api = {
	getList: async <K extends keyof ApiEntityMap>(
		pathName: K,
		selectFields: string[],
		limitMax: number | undefined = 1,
	): Promise<ApiEntityMap[K]> => {
		const url = new URL(`https://dummyjson.com/${pathName}`);
		url.searchParams.set('select', selectFields.join(','));
		url.searchParams.set('limit', limitMax?.toString());

		const res = await fetch(url.toString());
		if (!res.ok) {
			throw new Error(`Failed to fetch ${pathName}: ${res.statusText}`);
		}

		return await res.json();
	}
};

export default Api;