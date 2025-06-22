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

			then('it returns only selected fields from user list', async () => {
				const expectedUsers =  [ { id: 1, firstName: 'Emily', lastName: 'Johnson', city: 'Phoenix' } ];
				const limitMax = 1;
				const users = await Services.user.getList(selectedFields, limitMax);
				expect(users).toEqual(expectedUsers);
			});
		});
	});
});

