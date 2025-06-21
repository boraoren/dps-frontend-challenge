import Services from '../../../services';
import UserDomain from '../../../services/User/index.domain.ts';
import Utilities from '../../../utilities';

const FeaturesUsersTable = <
	const K extends readonly (keyof UserDomain)[]
>(
		selectFields: K,
	): (() => Promise<Pick<UserDomain, K[number]>[]>) => {
	return async () => {
		const limitMax = await Services.user.getLimitMax();
		const users = await Services.user.getList(selectFields, limitMax);
		return Utilities.array.getSelectedFields(users, selectFields);
	};
};


export default FeaturesUsersTable;