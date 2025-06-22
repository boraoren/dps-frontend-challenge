import Utilities from '../../../../utilities';
import Features from '../../../index.ts';

describe('integration.features.filters.city.getCities', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('nothing', () => {

		when('get cities by user list (projection)', () => {

			then('it returns city list', async () => {
				const expectedCities = [
					{ text: "Austin", value: "Austin" },
					{ text: "Charlotte", value: "Charlotte" },
					{ text: "Chicago", value: "Chicago" },
					{ text: "Columbus", value: "Columbus" },
					{ text: "Dallas", value: "Dallas" },
					{ text: "Denver", value: "Denver" },
					{ text: "Fort Worth", value: "Fort Worth" },
					{ text: "Houston", value: "Houston" },
					{ text: "Indianapolis", value: "Indianapolis" },
					{ text: "Jacksonville", value: "Jacksonville" },
					{ text: "Los Angeles", value: "Los Angeles" },
					{ text: "New York", value: "New York" },
					{ text: "Philadelphia", value: "Philadelphia" },
					{ text: "Phoenix", value: "Phoenix" },
					{ text: "San Antonio", value: "San Antonio" },
					{ text: "San Diego", value: "San Diego" },
					{ text: "San Francisco", value: "San Francisco" },
					{ text: "San Jose", value: "San Jose" },
					{ text: "Seattle", value: "Seattle" },
					{ text: "Washington", value: "Washington" }
				];

				const cities = await Features.filters.city.getCities();
				expect(cities).toEqual(expectedCities);

			});
		});
	});
});

