import UserDomain from '../User/index.domain.ts';
import Utilities from '../../utilities';

const cities = new Set<string>;

const ServicesCity = {
	getList: (users: UserDomain[]): string[] => {
		if (Utilities.set.isEmptySet(cities)) {
			users.forEach((user) => {
				const city = user.address.city;
				cities.add(city);
			});
		}

		return Array.from(cities) as string[];
	},
	sortList: (cities: string[]) => {
		return cities.sort();
	}
};

export default ServicesCity;