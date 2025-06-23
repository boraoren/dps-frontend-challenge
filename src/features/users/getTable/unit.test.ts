import Services from '../../../services';
import Features from '../../index.ts';
import Utilities from '../../../utilities';

jest.mock('../../../services');
const mockUserGetList = Services.user.getList as jest.Mock;

const logger = Utilities.logger.getTestLogger();

describe('unit.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('test users and selected fields', () => {

		const givenSelectedFields = ['firstName', 'email', 'address.city'] as const;
		const givenLimit = 1;

		logger.info('given',{givenSelectedFields, givenLimit});

		const mockUserGetListResolvedValue = {
			limit: 1,
			skip: 0,
			total: 208,
			users: [
				{
					firstName: "Emily",
					email: "emily.johnson@x.dummyjson.com",
					city: "Phoenix"
				}
			]
		};

		mockUserGetList.mockResolvedValue(mockUserGetListResolvedValue);

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersTable = Features.users.getTable({
				selectedFields: givenSelectedFields,
				limit: givenLimit,
			});

			then('it returns only selected fields from user list', async () => {
				const table = await usersTable();
				logger.info('then',{table});

				expect(mockUserGetList).toHaveBeenCalledWith({selectedFields: givenSelectedFields, limitMax:givenLimit});

				const expectedTable = {
					pagination: {
						limit: 1,
						skip: 0,
						total: 208
					},
					tableHeaders: [
						"firstName",
						"email",
						"city"
					],
					tableListItems: [
						{
							values: [
								"Emily",
								"emily.johnson@x.dummyjson.com",
								"Phoenix"
							]
						}
					]
				};

				expect(table).toEqual(expectedTable);
			});
		});
	});
});


