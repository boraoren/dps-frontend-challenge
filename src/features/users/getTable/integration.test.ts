import Features from '../../index.ts';
import Utilities from '../../../utilities';

describe('integration.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('selected fields, limitMax', () => {
		const selectedFields = ['firstName', 'email', 'address.city'] as const;
		const limit = 5;

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersTable = Features.users.getTable(selectedFields,limit);

			then('it returns only selected fields from user list', async () => {
				const table = await usersTable();
				const expectedTableForPage1 = {
					tableHeaders: ["firstName", "email", "city"],
					tableListItems: [
						{
							values: ["Emily", "emily.johnson@x.dummyjson.com", "Phoenix"]
						},{
							values: ["Michael", "michael.williams@x.dummyjson.com","Houston"]
						},{
							values: ["Sophia", "sophia.brown@x.dummyjson.com","Washington"]
						},{
							values: ["James", "james.davis@x.dummyjson.com","Seattle"]
						},{
							values: ["Emma", "emma.miller@x.dummyjson.com","Jacksonville"]
						}
					]
				};
				expect(table).toEqual(expectedTableForPage1);


			});
		});
	});
});

