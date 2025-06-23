import Utilities from '../../utilities';
import Services from '../index.ts';

describe('integration.services.user.getList', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('selected fields, limit max', () => {
		const selectedFields = ['id', 'firstName', 'lastName', 'address.city'] as const;

		when('fetcher is called with selected fields', () => {

			then('it returns only selected fields from user list and pagination', async () => {
				const expectedApiResponse =  {
					limit: 1,
					skip: 0,
					total: 208,
					users: [
						{
							city: "Phoenix",
							firstName: "Emily",
							id: 1,
							lastName: "Johnson"
						}
					]
				};
				const limitMax = 1;
				const apiResponse = await Services.user.getList({selectedFields, limitMax});
				expect(apiResponse).toEqual(expectedApiResponse);
			});
		});
	});
});

