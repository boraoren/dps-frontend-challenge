import Services from '../../../../services';

interface City{
	value: string;
	text: string;
	selected?: boolean;
	disabled?: boolean;
}

const FeaturesCityGetCities = async () => {
	const selectedFields = ['address.city'] as const;
	const limitMax = await Services.user.getLimitMax();
	const users = await Services.user.getList(selectedFields, limitMax);
	//TODO fix type
	const cities = Services.city.getList(users);
	const citiesSorted = Services.city.sortList(cities);

	return citiesSorted.map((city) => {
		return {
			text: city,
			value: city
		} as City;
	});
};

export default FeaturesCityGetCities;