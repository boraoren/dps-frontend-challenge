import FeaturesUsersGetTable from './users/getTable';
import FeaturesCityGetCities from './filters/city/getCities';
import FeaturesUsersGetByName from './users/get/byName';
import FeaturesUsersGetTableByProxy from './users/getTableByDatabase';

const Features = {
	users:{
		getTable: FeaturesUsersGetTable,
		getTableByProxy: FeaturesUsersGetTableByProxy,
		get: {
			byName: FeaturesUsersGetByName,
		}
	},
	filters:{
		city:{
			getCities: FeaturesCityGetCities,
		}
	}
};

export default Features;