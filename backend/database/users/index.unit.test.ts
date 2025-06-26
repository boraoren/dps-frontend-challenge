
import Database from '../index';
import Utilities from '../../utilities';

const logger = Utilities.logger.getTestLogger('users');

interface Concat {
	values: string[];
	to: string;
}
interface Options {
	select: string[];
	concat?: Concat[];
}


describe('getUsers function', () => {
	
	const usersDB = Database.users;
	
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('no input filters are provided', () => {
		when('the user list is requested with a limit of 1', () => {
			const limit = 1;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};

			const getUsersResponse = usersDB.getUsers({ limit }, options);
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Emily",
					"id": 1,
					"lastName": "Johnson"
				}
			];

			then('it should return a list of users', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('city filter is applied,', () => {
		when('When the user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const city = 'Dallas';

			const getUsersResponse = usersDB.getUsers({ limit }, options, {
				city
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Chloe",
					"id": 23,
					"lastName": "Morales"
				},
				{
					"firstName": "Evelyn",
					"id": 26,
					"lastName": "Gonzalez"
				},
				{
					"firstName": "Harper",
					"id": 36,
					"lastName": "Turner"
				},
				{
					"firstName": "Bella",
					"id": 58,
					"lastName": "Grant"
				},
				{
					"firstName": "Ethan",
					"id": 59,
					"lastName": "Fletcher"
				},
				{
					"firstName": "Autumn",
					"id": 92,
					"lastName": "Gomez"
				},
				{
					"firstName": "Ruby",
					"id": 94,
					"lastName": "Andrews"
				},
				{
					"firstName": "Aurora",
					"id": 96,
					"lastName": "Lawson"
				},
				{
					"firstName": "Alexander",
					"id": 112,
					"lastName": "Hernandez"
				},
				{
					"firstName": "Ethan",
					"id": 114,
					"lastName": "Thompson"
				},
				{
					"firstName": "Asher",
					"id": 173,
					"lastName": "Scott"
				},
				{
					"firstName": "Brandon",
					"id": 181,
					"lastName": "Collins"
				},
				{
					"firstName": "Henry",
					"id": 185,
					"lastName": "Adams"
				},
				{
					"firstName": "Zachary",
					"id": 187,
					"lastName": "Lee"
				},
				{
					"firstName": "Hazel",
					"id": 193,
					"lastName": "Evans"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('name filter is applied,', () => {
		when('When the user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const name = 'John';

			const getUsersResponse = usersDB.getUsers({ limit }, options, {
				name
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Emily",
					"id": 1,
					"lastName": "Johnson"
				},
				{
					"firstName": "John",
					"id": 102,
					"lastName": "Doe"
				},
				{
					"firstName": "Michael",
					"id": 104,
					"lastName": "Johnson"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('oldestPerCity filter is applied', () => {
		when('When the user list is fetched with a limit of 50', () => {
			const limit = 50;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const oldestPerCity = true;

			const getUsersResponse = usersDB.getUsers({ limit }, options, {
				oldestPerCity
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Emily",
					"id": 1,
					"isOldest": false,
					"lastName": "Johnson"
				},
				{
					"firstName": "Michael",
					"id": 2,
					"isOldest": false,
					"lastName": "Williams"
				},
				{
					"firstName": "Sophia",
					"id": 3,
					"isOldest": false,
					"lastName": "Brown"
				},
				{
					"firstName": "James",
					"id": 4,
					"isOldest": true,
					"lastName": "Davis"
				},
				{
					"firstName": "Emma",
					"id": 5,
					"isOldest": false,
					"lastName": "Miller"
				},
				{
					"firstName": "Olivia",
					"id": 6,
					"isOldest": false,
					"lastName": "Wilson"
				},
				{
					"firstName": "Alexander",
					"id": 7,
					"isOldest": false,
					"lastName": "Jones"
				},
				{
					"firstName": "Ava",
					"id": 8,
					"isOldest": false,
					"lastName": "Taylor"
				},
				{
					"firstName": "Ethan",
					"id": 9,
					"isOldest": true,
					"lastName": "Martinez"
				},
				{
					"firstName": "Isabella",
					"id": 10,
					"isOldest": false,
					"lastName": "Anderson"
				},
				{
					"firstName": "Liam",
					"id": 11,
					"isOldest": false,
					"lastName": "Garcia"
				},
				{
					"firstName": "Mia",
					"id": 12,
					"isOldest": false,
					"lastName": "Rodriguez"
				},
				{
					"firstName": "Noah",
					"id": 13,
					"isOldest": false,
					"lastName": "Hernandez"
				},
				{
					"firstName": "Charlotte",
					"id": 14,
					"isOldest": false,
					"lastName": "Lopez"
				},
				{
					"firstName": "William",
					"id": 15,
					"isOldest": false,
					"lastName": "Gonzalez"
				},
				{
					"firstName": "Avery",
					"id": 16,
					"isOldest": false,
					"lastName": "Perez"
				},
				{
					"firstName": "Evelyn",
					"id": 17,
					"isOldest": false,
					"lastName": "Sanchez"
				},
				{
					"firstName": "Logan",
					"id": 18,
					"isOldest": false,
					"lastName": "Torres"
				},
				{
					"firstName": "Abigail",
					"id": 19,
					"isOldest": false,
					"lastName": "Rivera"
				},
				{
					"firstName": "Jackson",
					"id": 20,
					"isOldest": false,
					"lastName": "Evans"
				},
				{
					"firstName": "Madison",
					"id": 21,
					"isOldest": false,
					"lastName": "Collins"
				},
				{
					"firstName": "Elijah",
					"id": 22,
					"isOldest": false,
					"lastName": "Stewart"
				},
				{
					"firstName": "Chloe",
					"id": 23,
					"isOldest": false,
					"lastName": "Morales"
				},
				{
					"firstName": "Mateo",
					"id": 24,
					"isOldest": false,
					"lastName": "Nguyen"
				},
				{
					"firstName": "Harper",
					"id": 25,
					"isOldest": false,
					"lastName": "Kelly"
				},
				{
					"firstName": "Evelyn",
					"id": 26,
					"isOldest": false,
					"lastName": "Gonzalez"
				},
				{
					"firstName": "Daniel",
					"id": 27,
					"isOldest": false,
					"lastName": "Cook"
				},
				{
					"firstName": "Lily",
					"id": 28,
					"isOldest": false,
					"lastName": "Lee"
				},
				{
					"firstName": "Henry",
					"id": 29,
					"isOldest": false,
					"lastName": "Hill"
				},
				{
					"firstName": "Addison",
					"id": 30,
					"isOldest": false,
					"lastName": "Wright"
				},
				{
					"firstName": "Gabriel",
					"id": 31,
					"isOldest": false,
					"lastName": "Adams"
				},
				{
					"firstName": "Natalie",
					"id": 32,
					"isOldest": false,
					"lastName": "Harris"
				},
				{
					"firstName": "Carter",
					"id": 33,
					"isOldest": false,
					"lastName": "Baker"
				},
				{
					"firstName": "Sofia",
					"id": 34,
					"isOldest": false,
					"lastName": "Mitchell"
				},
				{
					"firstName": "Jack",
					"id": 35,
					"isOldest": false,
					"lastName": "Ward"
				},
				{
					"firstName": "Harper",
					"id": 36,
					"isOldest": false,
					"lastName": "Turner"
				},
				{
					"firstName": "Mason",
					"id": 37,
					"isOldest": false,
					"lastName": "Parker"
				},
				{
					"firstName": "Aria",
					"id": 38,
					"isOldest": false,
					"lastName": "Roberts"
				},
				{
					"firstName": "Lucas",
					"id": 39,
					"isOldest": false,
					"lastName": "Gray"
				},
				{
					"firstName": "Ella",
					"id": 40,
					"isOldest": false,
					"lastName": "Adams"
				},
				{
					"firstName": "Evan",
					"id": 41,
					"isOldest": false,
					"lastName": "Reed"
				},
				{
					"firstName": "Avery",
					"id": 42,
					"isOldest": false,
					"lastName": "Carter"
				},
				{
					"firstName": "Benjamin",
					"id": 43,
					"isOldest": false,
					"lastName": "Foster"
				},
				{
					"firstName": "Scarlett",
					"id": 44,
					"isOldest": false,
					"lastName": "Wright"
				},
				{
					"firstName": "Lincoln",
					"id": 45,
					"isOldest": false,
					"lastName": "Kelly"
				},
				{
					"firstName": "Hannah",
					"id": 46,
					"isOldest": false,
					"lastName": "Robinson"
				},
				{
					"firstName": "Nicholas",
					"id": 47,
					"isOldest": false,
					"lastName": "Bailey"
				},
				{
					"firstName": "Luna",
					"id": 48,
					"isOldest": false,
					"lastName": "Russell"
				},
				{
					"firstName": "Jacob",
					"id": 49,
					"isOldest": false,
					"lastName": "Cooper"
				},
				{
					"firstName": "Stella",
					"id": 50,
					"isOldest": false,
					"lastName": "Hughes"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('name and city filter is applied', () => {
		when('user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const name = 'John';
			const city = 'Phoenix';

			const getUsersResponse = usersDB.getUsers({ limit }, options, {
				name,
				city
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Emily",
					"id": 1,
					"lastName": "Johnson"
				},
				{
					"firstName": "Michael",
					"id": 104,
					"lastName": "Johnson"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('name and oldestPerCity filter is applied', () => {
		when('user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const name = 'Mateo';
			const oldestPerCity = true;

			const getUsersResponse = usersDB.getUsers({ limit }, options, {
				name,
				oldestPerCity
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Mateo",
					"id": 24,
					"isOldest": false,
					"lastName": "Nguyen"
				},
				{
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false,
					"lastName": "Bennett"
				},
				{
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true,
					"lastName": "Perez"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('city and oldestPerCity filter is applied', () => {
		when('user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const city = 'Jacksonville';
			const oldestPerCity = true;

			const getUsersResponse = usersDB.getUsers({ limit }, options,{
				city,
				oldestPerCity
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Emma",
					"id": 5,
					"isOldest": false,
					"lastName": "Miller"
				},
				{
					"firstName": "Mia",
					"id": 12,
					"isOldest": false,
					"lastName": "Rodriguez"
				},
				{
					"firstName": "Stella",
					"id": 50,
					"isOldest": false,
					"lastName": "Hughes"
				},
				{
					"firstName": "Eli",
					"id": 51,
					"isOldest": false,
					"lastName": "Bennett"
				},
				{
					"firstName": "Zoe",
					"id": 70,
					"isOldest": false,
					"lastName": "Nicholson"
				},
				{
					"firstName": "Nolan",
					"id": 71,
					"isOldest": false,
					"lastName": "Bryant"
				},
				{
					"firstName": "Lillian",
					"id": 82,
					"isOldest": false,
					"lastName": "Bishop"
				},
				{
					"firstName": "Brayden",
					"id": 89,
					"isOldest": false,
					"lastName": "Fleming"
				},
				{
					"firstName": "Liam",
					"id": 122,
					"isOldest": false,
					"lastName": "Smith"
				},
				{
					"firstName": "Lucas",
					"id": 129,
					"isOldest": false,
					"lastName": "Allen"
				},
				{
					"firstName": "Bella",
					"id": 154,
					"isOldest": false,
					"lastName": "Gonzalez"
				},
				{
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false,
					"lastName": "Bennett"
				},
				{
					"firstName": "Xavier",
					"id": 177,
					"isOldest": false,
					"lastName": "Wright"
				},
				{
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true,
					"lastName": "Perez"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('name, city and oldestPerCity filter is applied', () => {
		when('user list is fetched with a limit of 208', () => {
			const limit = 208;
			const options: Options = {
				select: ['id', 'firstName', 'lastName']
			};
			const name = 'Mateo';
			const city = 'Jacksonville';
			const oldestPerCity = true;

			const getUsersResponse = usersDB.getUsers({ limit }, options,{
				name,
				city,
				oldestPerCity
			});

			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false,
					"lastName": "Bennett"
				},
				{
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true,
					"lastName": "Perez"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('combine firstName and lastName and put it in Name property', () => {
		when('user list is fetched with a limit of 208', () => {
			const limit = 10;
			const options: Options = {
				select: ['id', 'firstName', 'lastName', 'address.city'],
				concat: [{
					values: ['firstName','lastName'],
					to: 'name',
				}]
			};

			const getUsersResponse = usersDB.getUsers({ limit }, options);
			const users = getUsersResponse.users;

			logger.debug('USERS: ' ,users);

			const expectedUsers = [
				{
					"city": "Phoenix",
					"id": 1,
					"name": "Emily Johnson"
				},
				{
					"city": "Houston",
					"id": 2,
					"name": "Michael Williams"
				},
				{
					"city": "Washington",
					"id": 3,
					"name": "Sophia Brown"
				},
				{
					"city": "Seattle",
					"id": 4,
					"name": "James Davis"
				},
				{
					"city": "Jacksonville",
					"id": 5,
					"name": "Emma Miller"
				},
				{
					"city": "Fort Worth",
					"id": 6,
					"name": "Olivia Wilson"
				},
				{
					"city": "Indianapolis",
					"id": 7,
					"name": "Alexander Jones"
				},
				{
					"city": "Fort Worth",
					"id": 8,
					"name": "Ava Taylor"
				},
				{
					"city": "San Antonio",
					"id": 9,
					"name": "Ethan Martinez"
				},
				{
					"city": "New York",
					"id": 10,
					"name": "Isabella Anderson"
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});


		});
	});

});
