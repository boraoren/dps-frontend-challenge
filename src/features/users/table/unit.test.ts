import Services from '../../../services';
import Features from '../../index.ts';
import Utilities from '../../../utilities';
import UserDomain from '../../../services/User/index.domain.ts';

jest.mock('../../../services');
const mockUserGetList = Services.user.getList as jest.Mock;
const mockCityGetList = Services.city.getList as jest.Mock;

describe('unit.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('test users and selected fields', () => {
		const selectedFields = ['firstName', 'email', 'address.city'] as const;
		//TODO fix type
		const testUsers: UserDomain[] = [
			{
				firstName: 'Emily', email: 'emily.johnson@x.dummyjson.com', city: 'Phoenix'
			}
		];
		mockUserGetList.mockResolvedValue(testUsers);
		mockCityGetList.mockReturnValue(['Phoenix']);

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersTable = Features.users.table(selectedFields, 1);

			then('it returns only selected fields from user list', async () => {
				const table = await usersTable();
				expect(mockUserGetList).toHaveBeenCalledWith(selectedFields, 1);
				expect(mockCityGetList).toHaveBeenCalledWith(testUsers);

				const expectedTable = {
					searchCitySelectOptions: ['Phoenix'],
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

