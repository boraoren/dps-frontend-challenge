import Features from '../../index.ts';
import Utilities from '../../../utilities';

describe('integration.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('selected fields', () => {
		const selectedFields = ['id','firstName', 'email'] as const;

		when('fetcher is called with selected fields', () => {
			const usersTable = Features.users.table(selectedFields);

			then('it returns only selected fields from user list', async () => {
				const users = await usersTable();
				const userFound = users.find((user)=>{
					return user.id === 1;
				});

				const expectedUserId = 1;
				const expectedUserFirstName = 'Emily';
				const expectedUserEmail = 'emily.johnson@x.dummyjson.com';
				expect(userFound).toEqual({id: expectedUserId, firstName: expectedUserFirstName, email: expectedUserEmail });
			});
		});
	});
});

