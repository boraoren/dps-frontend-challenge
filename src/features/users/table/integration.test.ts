import Features from '../../index.ts';
import Utilities from '../../../utilities';

describe('integration.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('selected fields, limitMax', () => {
		const selectedFields = ['firstName', 'email', 'address.city'] as const;
		const limit = 1;

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersTable = Features.users.table(selectedFields,limit);

			then('it returns only selected fields from user list', async () => {
				const table = await usersTable();
				const expectedTable = {
					searchCitySelectOptions: ["Phoenix"],
					tableHeaders: ["firstName", "email", "city"],
					tableListItems: [
						{
							values: ["Emily", "emily.johnson@x.dummyjson.com", "Phoenix"]
						}
					]
				};
				expect(table).toEqual(expectedTable);
			});
		});
	});
});

