import Features from '../../index.ts';
import Utilities from '../../../utilities';

const logger = Utilities.logger.getTestLogger();

describe('integration.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('selected fields, limitMax', () => {
		const givenSelectedFields = ['firstName', 'email', 'address.city'] as const;
		const givenLimit = 5;

		logger.info( 'given',{givenSelectedFields, givenLimit});

		when('fetcher is called with selected fields', () => {
			//TODO fix type
			const usersGetTable = Features.users.getTable({
				selectedFields: givenSelectedFields,
				limit: givenLimit,
			});


			then('it returns only selected fields from user list', async () => {
				const {tableHeaders, tableListItems , pagination} = await usersGetTable();

				logger.info( 'then',{tableListItems});

				const expectedUsersGetTable = {
					pagination: {
						limit: 5,
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
						},
						{
							values: [
								"Michael",
								"michael.williams@x.dummyjson.com",
								"Houston"
							]
						},
						{
							values: [
								"Sophia",
								"sophia.brown@x.dummyjson.com",
								"Washington"
							]
						},
						{
							values: [
								"James",
								"james.davis@x.dummyjson.com",
								"Seattle"
							]
						},
						{
							values: [
								"Emma",
								"emma.miller@x.dummyjson.com",
								"Jacksonville"
							]
						}
					]
				};
				expect(tableListItems).toEqual(expectedUsersGetTable.tableListItems);
				expect(tableHeaders).toEqual(expectedUsersGetTable.tableHeaders);
				expect(pagination).toEqual(expectedUsersGetTable.pagination);


			});
		});
	});
});

