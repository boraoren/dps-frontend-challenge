import Services from '../../../services';
import UserDomain from '../../../services/User/index.domain.ts';

//TODO fix type
const FeaturesUsersGetTable = <
	const K extends readonly (keyof UserDomain)[]
>(
		selectFields: K,
		limit?: number,
		skip?:number,
	): ( () => Promise<Pick<UserDomain, K[number]>[]>) => {
	//TODO fix type
	return async () => {

		const limitMax = limit ?? await Services.user.getLimitMax();

		const users = await Services.user.getList(selectFields, limitMax,skip);

		const tableHeaders = selectFields.map(field => {
			const parts = field.split('.');
			return parts[parts.length - 1];
		});
		const tableListItems = users.map((user)=>{
			return {values:  tableHeaders.map((header)=>{
				//TODO fix type
				return user[header];
			})};
		});

		return {tableHeaders, tableListItems};
	};
};


export default FeaturesUsersGetTable;