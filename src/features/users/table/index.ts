import Services from '../../../services';
import UserDomain from '../../../services/User/index.domain.ts';

//TODO fix type
const FeaturesUsersTable = <
	const K extends readonly (keyof UserDomain)[]
>(
		selectFields: K,
		limit?: number,
	): ( () => Promise<Pick<UserDomain, K[number]>[]>) => {
	return async () => {
		const limitMax = limit ?? await Services.user.getLimitMax();
		const users = await Services.user.getList(selectFields, limitMax);
		//TODO fix type
		const searchCitySelectOptions = Services.city.getList(users);

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

		return {searchCitySelectOptions, tableHeaders, tableListItems};

		//getCitiesForSelectOptions
		/*
		tableHeaders: ['Name', 'City', 'Birthday'],
						tableListItems: [{
							values: ['Alotta Fudge', 'New York', '1.3.1995']
						},
						{
							values: ['Stan Still', 'Dallas', '31.10.1952']
						}]
		 */

		//return Utilities.array.getSelectedFields(users, selectFields);
	};
};


export default FeaturesUsersTable;