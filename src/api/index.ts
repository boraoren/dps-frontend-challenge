import UserDomain from '../services/User/index.domain.ts';

export enum ApiPathName {
	USERS = 'users',
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
	//...
}

type SelectableField<T> =
	| keyof T
	| {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${string}` : never;
}[keyof T];

const Api = {
	getList: async <K extends keyof ApiEntityMap, T>(
		pathName: K,
		selectFields: readonly SelectableField<T>[],
		limitMax: number | undefined = 1
	): Promise<ApiEntityMap[K]> => {
		try {
			const url = new URL(`https://dummyjson.com/${pathName}`);
			const topLevelFields = [...new Set(selectFields.map(f => f.toString().split('.')[0]))];
			url.searchParams.set('select', topLevelFields.join(','));
			url.searchParams.set('limit', limitMax?.toString());

			const res = await fetch(url.toString());
			if (!res.ok) {
				throw new Error(`Failed to fetch ${pathName}: ${res.statusText}`);
			}
			const json = await res.json() as ApiEntityMap[K];
			json[pathName] = (json[pathName] as unknown[]).map((item) => {
				return selectFields.reduce((acc, field) => {
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

			return json;

		} catch (exception) {
			throw new Error(`Failed to fetch ${pathName}: ${exception}`);
		}
	}
};

export default Api;