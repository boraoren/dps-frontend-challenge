import FeaturesUsersGetTable from './users/getTable';
import FeaturesCityGetCities from './filters/city/getCities';

const Features = {
	users:{
		getTable: FeaturesUsersGetTable,
	},
	filters:{
		city:{
			getCities: FeaturesCityGetCities,
		}
	}
};

export default Features;