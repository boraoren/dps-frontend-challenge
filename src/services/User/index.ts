import Api, { ApiPathName } from '../../api';
import UserDomain from './index.domain.ts';

const ServicesUser = {
	getList: async (limitMax?: number): Promise<UserDomain[]> => {
		const selectFields = ['firstName', 'lastName', 'birthDate', 'address'];
		const usersGetListApiResponse = await Api.getList(ApiPathName.USERS, selectFields, limitMax);
		return usersGetListApiResponse.users;
	},
	getLimitMax: async () => {
		const selectFields = ['id'];
		const limit = 1;
		const userGetLimitApiResponse = await Api.getList(ApiPathName.USERS, selectFields, limit);
		return userGetLimitApiResponse.total;
	}
};

export default ServicesUser;