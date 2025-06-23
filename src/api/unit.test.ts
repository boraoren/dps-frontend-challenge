import Utilities from '../utilities';
import Api from './index.ts';

const logger = Utilities.logger.getTestLogger();

describe('unit.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});


	const { given, when, then } = Utilities.test;

	given('users exist', () => {

		const givenPathName = 'users';
		const givenSelectedFields = ['id', 'firstName'];
		const givenLimitMax = 1;

		logger.info( 'given',{
			givenPathName,
			givenSelectedFields,
			givenLimitMax
		});

		when('requesting 1 user with id and firstName', () => {

			then('return the first user’s id and firstName', async () => {
				const apiResponse = await Api.getList({
					pathName: givenPathName,
					selectedFields: givenSelectedFields,
					limitMax: givenLimitMax
				});

				logger.info( 'then',{apiResponse});

				const expectedUsers = {
					users: [{
						id: 1,
						firstName: 'Emily'
					}], total: 208,
					skip: 0,
					limit: 1,
				};

				expect(apiResponse).toEqual(expectedUsers);
			});
		});
	});


	given('users with city data', () => {
		const givenPathName = 'users';
		const givenSelectedFields = ['id', 'firstName'];
		const givenLimitMax = 5;
		const givenFilter = {
			key: 'address.city',
			value: 'Denver',
		};

		logger.info( 'given',{
			givenPathName,
			givenSelectedFields,
			givenLimitMax,
			givenFilter,
		});


		when('filtered by address.city = Denver with pagination', () => {

			then('return up to 5 users with id and firstName for page 1', async () => {
				const apiResponse = await Api.getList({
					pathName: givenPathName,
					filter: givenFilter,
					limitMax: givenLimitMax,
					selectedFields: givenSelectedFields
				});

				logger.info('then for page 1',apiResponse);

				const expectedUsersForPageOne = {
					users: [
						{
							id: 11,
							firstName: "Liam",
						},
						{
							id: 33,
							firstName: "Carter",
						},
						{
							id: 68,
							firstName: "Layla",
						},
						{
							id: 69,
							firstName: "Christopher",
						},
						{
							id: 85,
							firstName: "Cameron",
						}
					],
					total: 8,
					skip: 0,
					limit: 5
				}
				;

				expect(apiResponse).toEqual(expectedUsersForPageOne);
			});

			then('return up to 3 users with id and firstName for page 2', async () => {
				const apiResponse = await Api.getList({
					pathName: givenPathName,
					filter: givenFilter,
					limitMax: givenLimitMax,
					skip: givenLimitMax,
					selectedFields: givenSelectedFields
				});

				logger.info('then for page 2',apiResponse);

				const expectedUsersForPageTwo ={
					users: [
						{
							id: 113,
							firstName: "Mia"
						},
						{
							id: 124,
							firstName: "Noah"
						},
						{
							id: 190,
							firstName: "Leah"
						}
					],
					"total": 8,
					"skip": 5,
					"limit": 3
				};

				expect(apiResponse).toEqual(expectedUsersForPageTwo);
			});
			
		});
	});
});


