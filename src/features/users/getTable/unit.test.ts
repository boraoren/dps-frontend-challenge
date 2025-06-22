import Services from '../../../services';
import Features from '../../index.ts';
import Utilities from '../../../utilities';
import UserDomain from '../../../services/User/index.domain.ts';

jest.mock('../../../services');
const mockUserGetList = Services.user.getList as jest.Mock;

describe('unit.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('test users and selected fields', () => {
		const selectedFields = ['firstName', 'email', 'address.city'] as const;
		const testUsers: UserDomain[] = [
			{
				//TODO fix type
				firstName: 'Emily', email: 'emily.johnson@x.dummyjson.com', city: 'Phoenix'
			}
		];
		mockUserGetList.mockResolvedValue(testUsers);

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersTable = Features.users.getTable(selectedFields, 1,0);

			then('it returns only selected fields from user list', async () => {
				const table = await usersTable();
				expect(mockUserGetList).toHaveBeenCalledWith(selectedFields, 1,0);

				const expectedTable = {
					tableHeaders: ['firstName', 'email', 'city'],
					tableListItems: [
						{
							values: ['Emily', 'emily.johnson@x.dummyjson.com', 'Phoenix']
						}
					]
				};

				expect(table).toEqual(expectedTable);
			});
		});
	});
});


