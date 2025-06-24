import FeaturesUsersGetTable from './users/getTable';
import FeaturesCityGetCities from './filters/city/getCities';
import FeaturesUsersGetByName from './users/get/byName';
import FeaturesUsersGetTableByDatabase from './users/getTableByDatabase';

const Features = {
	users:{
		getTable: FeaturesUsersGetTable,
		getTableByDatabase: FeaturesUsersGetTableByDatabase,
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