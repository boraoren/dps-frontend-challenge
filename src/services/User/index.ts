import Api, { ApiPathName } from '../../api';
import UserDomain from './index.domain.ts';

type SelectableField<T> =
	| keyof T
	| {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}.${string}` : never;
}[keyof T];

const ServicesUser = {
	getList: async <K extends readonly SelectableField<UserDomain>[]>
	(selectFields: K, limitMax?: number): Promise<UserDomain[]> => {
		const usersGetListApiResponse = await Api.getList(ApiPathName.USERS, selectFields, limitMax);
		return usersGetListApiResponse.users;
	},
	getLimitMax: async () => {
		const selectFields = ['id'];
		const limit = 1;
		const userGetLimitApiResponse = await Api.getList(ApiPathName.USERS, selectFields, limit);
		return userGetLimitApiResponse.total;
	},
};

export default ServicesUser;