import Services from '../../../services';
import UserDomain from '../../../services/User/index.domain.ts';
import Features from '../../index.ts';
import Utilities from '../../../utilities';


jest.mock('../../../services');
const mockGetLimitMax = Services.user.getLimitMax as jest.Mock;
const mockGetList = Services.user.getList as jest.Mock;

describe('unit.features.users.table', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('test users and selected fields', () => {
		const testUsers: UserDomain[] = [
			{
				id: 1,
				firstName: 'Emily',
				lastName: 'Johnson',
				maidenName: 'Smith',
				age: 28,
				gender: 'female',
				email: 'emily.johnson@x.dummyjson.com',
				phone: '+81 965-431-3024',
				username: 'emilys',
				password: 'emilyspass',
				birthDate: '1996-5-30',
				image: 'https://dummyjson.com/icon/emilys/128',
				bloodGroup: 'O-',
				height: 193.24,
				weight: 63.16,
				eyeColor: 'Green',
				hair: {
					color: 'Brown',
					type: 'Curly'
				},
				ip: '42.48.100.32',
				address: {
					address: '626 Main Street',
					city: 'Phoenix',
					state: 'Mississippi',
					stateCode: 'MS',
					postalCode: '29112',
					coordinates: {
						lat: -77.16213,
						lng: -92.084824
					},
					country: 'United States'
				},
				macAddress: '47:fa:41:18:ec:eb',
				university: 'University of Wisconsin--Madison',
				bank: {
					cardExpire: '03/26',
					cardNumber: '9289760655481815',
					cardType: 'Elo',
					currency: 'CNY',
					iban: 'YPUXISOBI7TTHPK2BR3HAIXL'
				},
				company: {
					department: 'Engineering',
					name: 'Dooley, Kozey and Cronin',
					title: 'Sales Manager',
					address: {
						address: '263 Tenth Street',
						city: 'San Francisco',
						state: 'Wisconsin',
						stateCode: 'WI',
						postalCode: '37657',
						coordinates: {
							lat: 71.814525,
							lng: -161.150263
						},
						country: 'United States'
					}
				},
				ein: '977-175',
				ssn: '900-590-289',
				userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
				crypto: {
					coin: 'Bitcoin',
					wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
					network: 'Ethereum (ERC20)'
				},
				role: 'admin'
			} as UserDomain
		];
		const selectedFields = ['firstName', 'email'] as const;

		mockGetLimitMax.mockResolvedValue(5);
		mockGetList.mockResolvedValue(testUsers);

		when('fetcher is called with selected fields', () => {
			const usersTable = Features.users.table(selectedFields);

			then('it returns only selected fields from user list', async () => {
				const users = await usersTable();

				expect(mockGetLimitMax).toHaveBeenCalled();
				expect(mockGetList).toHaveBeenCalledWith(selectedFields, 5);

				const expectedUserFirstName = 'Emily';
				const expectedUserEmail = 'emily.johnson@x.dummyjson.com';
				expect(users).toEqual([{ firstName: expectedUserFirstName, email: expectedUserEmail }]);
			});
		});
	});
});

