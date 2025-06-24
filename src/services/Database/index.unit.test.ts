import Utilities from '../../utilities';
import Database from './database.ts';

const logger = Utilities.logger.getTestLogger('services/database');

describe('getUsers function', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const { given, when, then } = Utilities.test;

	given('no input filters are provided', () => {
		when('the user list is requested with a limit of 1', () => {
			const getUsersResponse = Database.getUsers({ limit: 1 });
			const users = getUsersResponse.users;

			const expectedUsers = [{
				'id': 1,
				'firstName': 'Emily',
				'lastName': 'Johnson',
				'maidenName': 'Smith',
				'age': 28,
				'gender': 'female',
				'email': 'emily.johnson@x.dummyjson.com',
				'phone': '+81 965-431-3024',
				'username': 'emilys',
				'password': 'emilyspass',
				'birthDate': '1996-5-30',
				'image': 'https://dummyjson.com/icon/emilys/128',
				'bloodGroup': 'O-',
				'height': 193.24,
				'weight': 63.16,
				'eyeColor': 'Green',
				'hair': {
					'color': 'Brown',
					'type': 'Curly'
				},
				'ip': '42.48.100.32',
				'address': {
					'address': '626 Main Street',
					'city': 'Phoenix',
					'state': 'Mississippi',
					'stateCode': 'MS',
					'postalCode': '29112',
					'coordinates': {
						'lat': -77.16213,
						'lng': -92.084824
					},
					'country': 'United States'
				},
				'macAddress': '47:fa:41:18:ec:eb',
				'university': 'University of Wisconsin--Madison',
				'bank': {
					'cardExpire': '03/26',
					'cardNumber': '9289760655481815',
					'cardType': 'Elo',
					'currency': 'CNY',
					'iban': 'YPUXISOBI7TTHPK2BR3HAIXL'
				},
				'company': {
					'department': 'Engineering',
					'name': 'Dooley, Kozey and Cronin',
					'title': 'Sales Manager',
					'address': {
						'address': '263 Tenth Street',
						'city': 'San Francisco',
						'state': 'Wisconsin',
						'stateCode': 'WI',
						'postalCode': '37657',
						'coordinates': {
							'lat': 71.814525,
							'lng': -161.150263
						},
						'country': 'United States'
					}
				},
				'ein': '977-175',
				'ssn': '900-590-289',
				'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
				'crypto': {
					'coin': 'Bitcoin',
					'wallet': '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
					'network': 'Ethereum (ERC20)'
				},
				'role': 'admin'
			}];

			then('it should return a list of users', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

	given('city filter is applied,', () => {
		when('When the user list is fetched with a limit of 208', () => {
			const limit = 208;
			const getUsersResponse = Database.getUsers({ limit }, {
				city: 'Dallas'
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "401 Fourth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -30.190759,
							"lng": -58.705979
						},
						"country": "United States",
						"postalCode": "54972",
						"state": "New Jersey",
						"stateCode": "NJ"
					},
					"age": 39,
					"bank": {
						"cardExpire": "05/28",
						"cardNumber": "3150496938377346",
						"cardType": "American Express",
						"currency": "PKR",
						"iban": "P7YLGOOBWBD1SRWDWSFO3PZ0"
					},
					"birthDate": "1985-4-21",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "269 Third Street",
							"city": "Houston",
							"coordinates": {
								"lat": 40.098115,
								"lng": -1.762972
							},
							"country": "United States",
							"postalCode": "10385",
							"state": "North Carolina",
							"stateCode": "NC"
						},
						"department": "Sales",
						"name": "Grady LLC",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "913-597",
					"email": "chloe.morales@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Chloe",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Kinky"
					},
					"height": 185.07,
					"id": 23,
					"image": "https://dummyjson.com/icon/chloem/128",
					"ip": "66.78.20.21",
					"lastName": "Morales",
					"macAddress": "fc:f:29:e1:37:b8",
					"maidenName": "",
					"password": "chloempass",
					"phone": "+92 468-541-7133",
					"role": "user",
					"ssn": "938-883-163",
					"university": "Syracuse University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "chloem",
					"weight": 63.97
				},
				{
					"address": {
						"address": "1065 Lincoln Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 67.768359,
							"lng": 71.268643
						},
						"country": "United States",
						"postalCode": "84898",
						"state": "Maine",
						"stateCode": "ME"
					},
					"age": 35,
					"bank": {
						"cardExpire": "03/28",
						"cardNumber": "9584313788145560",
						"cardType": "RuPay",
						"currency": "INR",
						"iban": "X4UPULQG61VIGA97USY7AAEB"
					},
					"birthDate": "1989-2-5",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "584 Ninth Street",
							"city": "Jacksonville",
							"coordinates": {
								"lat": 26.014021,
								"lng": 40.572436
							},
							"country": "United States",
							"postalCode": "45633",
							"state": "Wisconsin",
							"stateCode": "WI"
						},
						"department": "Accounting",
						"name": "Tromp, Gaylord and Weber",
						"title": "Project Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "569-275",
					"email": "evelyn.gonzalez@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Evelyn",
					"gender": "female",
					"hair": {
						"color": "Black",
						"type": "Wavy"
					},
					"height": 168.94,
					"id": 26,
					"image": "https://dummyjson.com/icon/evelyng/128",
					"ip": "42.52.74.232",
					"lastName": "Gonzalez",
					"macAddress": "89:5e:5a:2a:72:42",
					"maidenName": "",
					"password": "evelyngpass",
					"phone": "+61 708-508-4638",
					"role": "user",
					"ssn": "487-680-127",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "evelyng",
					"weight": 58.47
				},
				{
					"address": {
						"address": "1964 Fifth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -41.149882,
							"lng": -167.072873
						},
						"country": "United States",
						"postalCode": "63361",
						"state": "Utah",
						"stateCode": "UT"
					},
					"age": 33,
					"bank": {
						"cardExpire": "02/28",
						"cardNumber": "8250985716703050",
						"cardType": "BC Card",
						"currency": "JPY",
						"iban": "CVZUYWP0DE2FJV35UBX139M6"
					},
					"birthDate": "1991-1-14",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1431 Lincoln Street",
							"city": "Denver",
							"coordinates": {
								"lat": 15.465539,
								"lng": -76.452876
							},
							"country": "United States",
							"postalCode": "12416",
							"state": "Delaware",
							"stateCode": "DE"
						},
						"department": "Engineering",
						"name": "Ritchie and Sons",
						"title": "Marketing Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "474-323",
					"email": "harper.turner@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Harper",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Curly"
					},
					"height": 191.03,
					"id": 36,
					"image": "https://dummyjson.com/icon/harpert/128",
					"ip": "102.200.5.180",
					"lastName": "Turner",
					"macAddress": "3c:5f:b3:2:1c:5",
					"maidenName": "",
					"password": "harpertpass",
					"phone": "+49 980-340-5333",
					"role": "user",
					"ssn": "290-677-251",
					"university": "Boston University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "harpert",
					"weight": 70.18
				},
				{
					"address": {
						"address": "447 Ninth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 30.371676,
							"lng": -141.802948
						},
						"country": "United States",
						"postalCode": "40138",
						"state": "Mississippi",
						"stateCode": "MS"
					},
					"age": 27,
					"bank": {
						"cardExpire": "01/28",
						"cardNumber": "2403745255892443",
						"cardType": "RuPay International",
						"currency": "JPY",
						"iban": "RD1LSDS2ZKLY47IBHWNHXWF1"
					},
					"birthDate": "1997-3-15",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1704 Cedar Street",
							"city": "Washington",
							"coordinates": {
								"lat": -69.164818,
								"lng": -85.578158
							},
							"country": "United States",
							"postalCode": "29113",
							"state": "Pennsylvania",
							"stateCode": "PA"
						},
						"department": "Product Management",
						"name": "Weissnat, Wyman and Turner",
						"title": "Project Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "709-625",
					"email": "bella.grant@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Bella",
					"gender": "female",
					"hair": {
						"color": "Blonde",
						"type": "Straight"
					},
					"height": 192.65,
					"id": 58,
					"image": "https://dummyjson.com/icon/bellag/128",
					"ip": "123.144.124.157",
					"lastName": "Grant",
					"macAddress": "8c:df:ff:9a:1f:7c",
					"maidenName": "",
					"password": "bellagpass",
					"phone": "+92 896-206-1901",
					"role": "user",
					"ssn": "629-978-834",
					"university": "Vanderbilt University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "bellag",
					"weight": 96.46
				},
				{
					"address": {
						"address": "789 Main Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 29.411519,
							"lng": 23.598322
						},
						"country": "United States",
						"postalCode": "87924",
						"state": "Arkansas",
						"stateCode": "AR"
					},
					"age": 33,
					"bank": {
						"cardExpire": "05/25",
						"cardNumber": "4591531606680865",
						"cardType": "Interac",
						"currency": "TRY",
						"iban": "0DIIQ3XV0C7N79DDVXSRTR51"
					},
					"birthDate": "1991-5-1",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "258 Tenth Street",
							"city": "Washington",
							"coordinates": {
								"lat": 45.367618,
								"lng": -147.524292
							},
							"country": "United States",
							"postalCode": "10371",
							"state": "Texas",
							"stateCode": "TX"
						},
						"department": "Training",
						"name": "Halvorson LLC",
						"title": "Data Scientist"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "610-786",
					"email": "ethan.fletcher@x.dummyjson.com",
					"eyeColor": "Violet",
					"firstName": "Ethan",
					"gender": "male",
					"hair": {
						"color": "Brown",
						"type": "Curly"
					},
					"height": 183.99,
					"id": 59,
					"image": "https://dummyjson.com/icon/ethanf/128",
					"ip": "21.94.6.7",
					"lastName": "Fletcher",
					"macAddress": "b2:fd:ca:1b:3b:a5",
					"maidenName": "",
					"password": "ethanfpass",
					"phone": "+1 251-564-2643",
					"role": "user",
					"ssn": "577-991-233",
					"university": "Cornell University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "ethanf",
					"weight": 83.98
				},
				{
					"address": {
						"address": "1585 Washington Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 27.443768,
							"lng": -176.861979
						},
						"country": "United States",
						"postalCode": "53203",
						"state": "Illinois",
						"stateCode": "IL"
					},
					"age": 26,
					"bank": {
						"cardExpire": "03/27",
						"cardNumber": "7832657139737556",
						"cardType": "American Express",
						"currency": "BRL",
						"iban": "H18JQOGY5KBX53QKVILJIP9O"
					},
					"birthDate": "1998-2-1",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "1818 Jefferson Street",
							"city": "Philadelphia",
							"coordinates": {
								"lat": -46.202815,
								"lng": 163.840848
							},
							"country": "United States",
							"postalCode": "69388",
							"state": "New York",
							"stateCode": "NY"
						},
						"department": "Product Management",
						"name": "Kuhlman LLC",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "411-642",
					"email": "autumn.gomez@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Autumn",
					"gender": "female",
					"hair": {
						"color": "Purple",
						"type": "Wavy"
					},
					"height": 182.61,
					"id": 92,
					"image": "https://dummyjson.com/icon/autumng/128",
					"ip": "104.233.56.225",
					"lastName": "Gomez",
					"macAddress": "75:e4:8e:ea:ce:9d",
					"maidenName": "",
					"password": "autumngpass",
					"phone": "+1 340-455-2897",
					"role": "user",
					"ssn": "165-661-612",
					"university": "University of Chicago",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "autumng",
					"weight": 92.77
				},
				{
					"address": {
						"address": "800 Adams Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 17.888532,
							"lng": 147.485554
						},
						"country": "United States",
						"postalCode": "85259",
						"state": "Texas",
						"stateCode": "TX"
					},
					"age": 28,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "7515727970528432",
						"cardType": "Diners Club International",
						"currency": "PKR",
						"iban": "V67W4TDBSQ7DGMDE8JUV83Z3"
					},
					"birthDate": "1996-7-7",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "180 Sixth Street",
							"city": "San Jose",
							"coordinates": {
								"lat": -8.372312,
								"lng": 6.099603
							},
							"country": "United States",
							"postalCode": "88718",
							"state": "Virginia",
							"stateCode": "VA"
						},
						"department": "Marketing",
						"name": "Kohler and Sons",
						"title": "Human Resources Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "444-692",
					"email": "ruby.andrews@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Ruby",
					"gender": "female",
					"hair": {
						"color": "White",
						"type": "Wavy"
					},
					"height": 176.73,
					"id": 94,
					"image": "https://dummyjson.com/icon/rubya/128",
					"ip": "37.23.186.32",
					"lastName": "Andrews",
					"macAddress": "13:d2:72:d4:3b:94",
					"maidenName": "",
					"password": "rubyapass",
					"phone": "+1 343-203-7912",
					"role": "user",
					"ssn": "125-457-144",
					"university": "University of Chicago",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "rubya",
					"weight": 98.77
				},
				{
					"address": {
						"address": "1140 Adams Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 83.417744,
							"lng": -7.933044
						},
						"country": "United States",
						"postalCode": "29004",
						"state": "Minnesota",
						"stateCode": "MN"
					},
					"age": 26,
					"bank": {
						"cardExpire": "01/29",
						"cardNumber": "9694556473609201",
						"cardType": "BC Card",
						"currency": "GBP",
						"iban": "UMG0AGFGNEZAY6DC45KS9ENB"
					},
					"birthDate": "1998-6-16",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "164 Fifth Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": 89.270633,
								"lng": -72.618747
							},
							"country": "United States",
							"postalCode": "27958",
							"state": "New York",
							"stateCode": "NY"
						},
						"department": "Product Management",
						"name": "Hudson - Marquardt",
						"title": "Chief Information Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "477-337",
					"email": "aurora.lawson@x.dummyjson.com",
					"eyeColor": "Violet",
					"firstName": "Aurora",
					"gender": "female",
					"hair": {
						"color": "Green",
						"type": "Wavy"
					},
					"height": 174.28,
					"id": 96,
					"image": "https://dummyjson.com/icon/auroral/128",
					"ip": "161.244.58.227",
					"lastName": "Lawson",
					"macAddress": "34:95:bd:59:f4:39",
					"maidenName": "",
					"password": "auroralpass",
					"phone": "+92 802-452-4192",
					"role": "user",
					"ssn": "191-532-292",
					"university": "Boston University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
					"username": "auroral",
					"weight": 88.18
				},
				{
					"address": {
						"address": "329 Second Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 14.101714,
							"lng": -148.130379
						},
						"country": "United States",
						"postalCode": "49314",
						"state": "Idaho",
						"stateCode": "ID"
					},
					"age": 41,
					"bank": {
						"cardExpire": "02/27",
						"cardNumber": "3843242207440634",
						"cardType": "JCB",
						"currency": "EUR",
						"iban": "7DGPYK166FA9X36Q48OGU2W5"
					},
					"birthDate": "1983-7-4",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "176 Main Street",
							"city": "Seattle",
							"coordinates": {
								"lat": 25.794587,
								"lng": 101.693435
							},
							"country": "United States",
							"postalCode": "61558",
							"state": "Pennsylvania",
							"stateCode": "PA"
						},
						"department": "Sales",
						"name": "Gibson LLC",
						"title": "Chief Technology Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "355-181",
					"email": "alexander.hernandez@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Alexander",
					"gender": "male",
					"hair": {
						"color": "Brown",
						"type": "Kinky"
					},
					"height": 172.2,
					"id": 112,
					"image": "https://dummyjson.com/icon/alexanderh/128",
					"ip": "145.104.53.16",
					"lastName": "Hernandez",
					"macAddress": "4c:83:2a:82:f:c6",
					"maidenName": "",
					"password": "alexanderhpass",
					"phone": "+49 410-245-8608",
					"role": "user",
					"ssn": "583-406-155",
					"university": "University of Florida",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "alexanderh",
					"weight": 82.3
				},
				{
					"address": {
						"address": "1497 Tenth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 17.032342,
							"lng": -23.993339
						},
						"country": "United States",
						"postalCode": "38792",
						"state": "Tennessee",
						"stateCode": "TN"
					},
					"age": 32,
					"bank": {
						"cardExpire": "02/26",
						"cardNumber": "8976448819859905",
						"cardType": "RuPay",
						"currency": "INR",
						"iban": "PGR7J73BEKZSKT8UPWGH210N"
					},
					"birthDate": "1992-1-10",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "656 Madison Street",
							"city": "Seattle",
							"coordinates": {
								"lat": -22.186816,
								"lng": -46.552856
							},
							"country": "United States",
							"postalCode": "83999",
							"state": "Minnesota",
							"stateCode": "MN"
						},
						"department": "Engineering",
						"name": "Schmeler - Spinka",
						"title": "Systems Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "486-666",
					"email": "ethan.thompson@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Ethan",
					"gender": "male",
					"hair": {
						"color": "Gray",
						"type": "Kinky"
					},
					"height": 153.05,
					"id": 114,
					"image": "https://dummyjson.com/icon/ethant/128",
					"ip": "236.39.153.193",
					"lastName": "Thompson",
					"macAddress": "55:fb:cb:7e:dd:4d",
					"maidenName": "",
					"password": "ethantpass",
					"phone": "+1 872-403-3499",
					"role": "user",
					"ssn": "472-617-866",
					"university": "University of California--Irvine",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
					"username": "ethant",
					"weight": 79.71
				},
				{
					"address": {
						"address": "666 Main Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -80.129031,
							"lng": -63.515107
						},
						"country": "United States",
						"postalCode": "82460",
						"state": "Vermont",
						"stateCode": "VT"
					},
					"age": 30,
					"bank": {
						"cardExpire": "05/25",
						"cardNumber": "3646724579262062",
						"cardType": "Maestro",
						"currency": "AUD",
						"iban": "AE993O774OIH1BTCM9OBFB5V"
					},
					"birthDate": "1994-8-18",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "1640 Oak Street",
							"city": "Washington",
							"coordinates": {
								"lat": -29.790789,
								"lng": -43.572763
							},
							"country": "United States",
							"postalCode": "29026",
							"state": "Oklahoma",
							"stateCode": "OK"
						},
						"department": "Human Resources",
						"name": "Ullrich LLC",
						"title": "Sales Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "172-363",
					"email": "asher.scott@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Asher",
					"gender": "male",
					"hair": {
						"color": "Blue",
						"type": "Curly"
					},
					"height": 169.56,
					"id": 173,
					"image": "https://dummyjson.com/icon/ashers/128",
					"ip": "150.136.12.36",
					"lastName": "Scott",
					"macAddress": "7f:1d:2a:a2:c0:29",
					"maidenName": "",
					"password": "asherspass",
					"phone": "+81 469-421-7639",
					"role": "user",
					"ssn": "744-472-971",
					"university": "Columbia University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
					"username": "ashers",
					"weight": 54.08
				},
				{
					"address": {
						"address": "374 First Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 64.264679,
							"lng": 174.078392
						},
						"country": "United States",
						"postalCode": "62698",
						"state": "Delaware",
						"stateCode": "DE"
					},
					"age": 26,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "8943098914544972",
						"cardType": "RuPay",
						"currency": "INR",
						"iban": "PML2YC2ZO0PIB6KOHO9SR2QL"
					},
					"birthDate": "1998-1-19",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "169 Main Street",
							"city": "Dallas",
							"coordinates": {
								"lat": 82.491266,
								"lng": 149.725205
							},
							"country": "United States",
							"postalCode": "28242",
							"state": "Nebraska",
							"stateCode": "NE"
						},
						"department": "Marketing",
						"name": "Von Inc",
						"title": "Legal Counsel"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "534-537",
					"email": "brandon.collins@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Brandon",
					"gender": "male",
					"hair": {
						"color": "Black",
						"type": "Curly"
					},
					"height": 173.25,
					"id": 181,
					"image": "https://dummyjson.com/icon/brandonc/128",
					"ip": "2.164.227.107",
					"lastName": "Collins",
					"macAddress": "6c:11:5e:d9:f0:de",
					"maidenName": "",
					"password": "brandoncpass",
					"phone": "+91 994-732-2700",
					"role": "user",
					"ssn": "507-587-931",
					"university": "Yale University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
					"username": "brandonc",
					"weight": 68.45
				},
				{
					"address": {
						"address": "151 Oak Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 6.813674,
							"lng": -105.472209
						},
						"country": "United States",
						"postalCode": "78616",
						"state": "Georgia",
						"stateCode": "GA"
					},
					"age": 44,
					"bank": {
						"cardExpire": "02/26",
						"cardNumber": "2120519729346846",
						"cardType": "Maestro",
						"currency": "CNY",
						"iban": "19H6D3F0DSQVELU64M1BLF14"
					},
					"birthDate": "1980-7-14",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "1110 Jefferson Street",
							"city": "Chicago",
							"coordinates": {
								"lat": 19.662554,
								"lng": 101.121585
							},
							"country": "United States",
							"postalCode": "82652",
							"state": "Arizona",
							"stateCode": "AZ"
						},
						"department": "Product Management",
						"name": "Armstrong Inc",
						"title": "Developer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "189-752",
					"email": "henry.adams@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Henry",
					"gender": "male",
					"hair": {
						"color": "Blue",
						"type": "Kinky"
					},
					"height": 155.01,
					"id": 185,
					"image": "https://dummyjson.com/icon/henrya/128",
					"ip": "67.144.157.90",
					"lastName": "Adams",
					"macAddress": "dc:58:e5:e2:32:dd",
					"maidenName": "",
					"password": "henryapass",
					"phone": "+61 715-487-1979",
					"role": "user",
					"ssn": "389-856-938",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "henrya",
					"weight": 56.01
				},
				{
					"address": {
						"address": "1532 Third Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 71.063285,
							"lng": 15.925876
						},
						"country": "United States",
						"postalCode": "60280",
						"state": "Alabama",
						"stateCode": "AL"
					},
					"age": 36,
					"bank": {
						"cardExpire": "01/27",
						"cardNumber": "1880310793893765",
						"cardType": "Diners Club International",
						"currency": "EUR",
						"iban": "3DU5SEGGMHCN93AHP9U1CXGO"
					},
					"birthDate": "1988-12-26",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "1550 Jefferson Street",
							"city": "Phoenix",
							"coordinates": {
								"lat": 0.442612,
								"lng": 133.409766
							},
							"country": "United States",
							"postalCode": "51068",
							"state": "Maryland",
							"stateCode": "MD"
						},
						"department": "Services",
						"name": "Halvorson LLC",
						"title": "Accountant"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "521-435",
					"email": "zachary.lee@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Zachary",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Curly"
					},
					"height": 193.23,
					"id": 187,
					"image": "https://dummyjson.com/icon/zacharyl/128",
					"ip": "49.188.116.209",
					"lastName": "Lee",
					"macAddress": "da:fb:3c:ad:a1:94",
					"maidenName": "",
					"password": "zacharylpass",
					"phone": "+61 382-295-6973",
					"role": "user",
					"ssn": "318-415-529",
					"university": "Brown University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
					"username": "zacharyl",
					"weight": 94.79
				},
				{
					"address": {
						"address": "855 Jefferson Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -51.810295,
							"lng": 63.397461
						},
						"country": "United States",
						"postalCode": "49273",
						"state": "South Dakota",
						"stateCode": "SD"
					},
					"age": 28,
					"bank": {
						"cardExpire": "04/28",
						"cardNumber": "4298545687586865",
						"cardType": "RuPay International",
						"currency": "CNY",
						"iban": "F4501CHUX9CVQMGESQ6YT51S"
					},
					"birthDate": "1996-8-11",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "676 Fifth Street",
							"city": "Phoenix",
							"coordinates": {
								"lat": -29.275345,
								"lng": 119.974261
							},
							"country": "United States",
							"postalCode": "41510",
							"state": "Arizona",
							"stateCode": "AZ"
						},
						"department": "Human Resources",
						"name": "Goldner, Batz and Hilpert",
						"title": "Data Scientist"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "616-626",
					"email": "hazel.evans@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Hazel",
					"gender": "female",
					"hair": {
						"color": "Green",
						"type": "Curly"
					},
					"height": 188.78,
					"id": 193,
					"image": "https://dummyjson.com/icon/hazelc/128",
					"ip": "94.206.41.47",
					"lastName": "Evans",
					"macAddress": "5:57:74:1d:33:1f",
					"maidenName": "Collins",
					"password": "hazelcpass",
					"phone": "+92 319-405-4110",
					"role": "user",
					"ssn": "753-280-519",
					"university": "Georgetown University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "hazelc",
					"weight": 77.33
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
			const getUsersResponse = Database.getUsers({ limit }, {
				name: 'John'
			});
			const users = getUsersResponse.users;

			const expectedUsers =[
				{
					"address": {
						"address": "626 Main Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -77.16213,
							"lng": -92.084824
						},
						"country": "United States",
						"postalCode": "29112",
						"state": "Mississippi",
						"stateCode": "MS"
					},
					"age": 28,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "9289760655481815",
						"cardType": "Elo",
						"currency": "CNY",
						"iban": "YPUXISOBI7TTHPK2BR3HAIXL"
					},
					"birthDate": "1996-5-30",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "263 Tenth Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": 71.814525,
								"lng": -161.150263
							},
							"country": "United States",
							"postalCode": "37657",
							"state": "Wisconsin",
							"stateCode": "WI"
						},
						"department": "Engineering",
						"name": "Dooley, Kozey and Cronin",
						"title": "Sales Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "977-175",
					"email": "emily.johnson@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Emily",
					"gender": "female",
					"hair": {
						"color": "Brown",
						"type": "Curly"
					},
					"height": 193.24,
					"id": 1,
					"image": "https://dummyjson.com/icon/emilys/128",
					"ip": "42.48.100.32",
					"lastName": "Johnson",
					"macAddress": "47:fa:41:18:ec:eb",
					"maidenName": "Smith",
					"password": "emilyspass",
					"phone": "+81 965-431-3024",
					"role": "admin",
					"ssn": "900-590-289",
					"university": "University of Wisconsin--Madison",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "emilys",
					"weight": 63.16
				},
				{
					"address": {
						"address": "37 Second Street",
						"city": "Fort Worth",
						"coordinates": {
							"lat": -66.043758,
							"lng": -59.356632
						},
						"country": "United States",
						"postalCode": "33991",
						"state": "New York",
						"stateCode": "NY"
					},
					"age": 35,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "3399117834001550",
						"cardType": "Discover",
						"currency": "SEK",
						"iban": "I9Z2RPUZSKFF9WF8RU7DDUUK"
					},
					"birthDate": "1989-2-20",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "1095 Adams Street",
							"city": "Washington",
							"coordinates": {
								"lat": 63.930802,
								"lng": 88.782366
							},
							"country": "United States",
							"postalCode": "43273",
							"state": "Missouri",
							"stateCode": "MO"
						},
						"department": "Accounting",
						"name": "Aufderhar - Cormier",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "861-925",
					"email": "john.doe@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "John",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Wavy"
					},
					"height": 179.44,
					"id": 102,
					"image": "https://dummyjson.com/icon/johnd/128",
					"ip": "1.250.48.36",
					"lastName": "Doe",
					"macAddress": "6d:ab:13:25:a0:10",
					"maidenName": "",
					"password": "johndpass",
					"phone": "+44 242-757-6754",
					"role": "user",
					"ssn": "824-760-922",
					"university": "Brown University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "johnd",
					"weight": 93.42
				},
				{
					"address": {
						"address": "1252 Washington Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -79.040825,
							"lng": 100.576804
						},
						"country": "United States",
						"postalCode": "64002",
						"state": "Maryland",
						"stateCode": "MD"
					},
					"age": 24,
					"bank": {
						"cardExpire": "04/29",
						"cardNumber": "2205427429854197",
						"cardType": "Mir",
						"currency": "NZD",
						"iban": "6K4V5L5HGC4BR84RUB9PI41J"
					},
					"birthDate": "2000-1-6",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "378 Madison Street",
							"city": "Columbus",
							"coordinates": {
								"lat": -74.566078,
								"lng": -90.962102
							},
							"country": "United States",
							"postalCode": "34297",
							"state": "South Dakota",
							"stateCode": "SD"
						},
						"department": "Marketing",
						"name": "Wisozk, Schamberger and Huels",
						"title": "Systems Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "819-102",
					"email": "michael.johnson@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Michael",
					"gender": "male",
					"hair": {
						"color": "White",
						"type": "Curly"
					},
					"height": 164.38,
					"id": 104,
					"image": "https://dummyjson.com/icon/michaelj/128",
					"ip": "115.37.119.66",
					"lastName": "Johnson",
					"macAddress": "29:bc:a7:64:58:48",
					"maidenName": "",
					"password": "michaeljpass",
					"phone": "+92 290-825-4767",
					"role": "user",
					"ssn": "924-462-933",
					"university": "University of Miami",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "michaelj",
					"weight": 97.18
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
			const getUsersResponse = Database.getUsers({ limit }, {
				oldestPerCity: true,
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "626 Main Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -77.16213,
							"lng": -92.084824
						},
						"country": "United States",
						"postalCode": "29112",
						"state": "Mississippi",
						"stateCode": "MS"
					},
					"age": 28,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "9289760655481815",
						"cardType": "Elo",
						"currency": "CNY",
						"iban": "YPUXISOBI7TTHPK2BR3HAIXL"
					},
					"birthDate": "1996-5-30",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "263 Tenth Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": 71.814525,
								"lng": -161.150263
							},
							"country": "United States",
							"postalCode": "37657",
							"state": "Wisconsin",
							"stateCode": "WI"
						},
						"department": "Engineering",
						"name": "Dooley, Kozey and Cronin",
						"title": "Sales Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "977-175",
					"email": "emily.johnson@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Emily",
					"gender": "female",
					"hair": {
						"color": "Brown",
						"type": "Curly"
					},
					"height": 193.24,
					"id": 1,
					"image": "https://dummyjson.com/icon/emilys/128",
					"ip": "42.48.100.32",
					"isOldest": false,
					"lastName": "Johnson",
					"macAddress": "47:fa:41:18:ec:eb",
					"maidenName": "Smith",
					"password": "emilyspass",
					"phone": "+81 965-431-3024",
					"role": "admin",
					"ssn": "900-590-289",
					"university": "University of Wisconsin--Madison",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "emilys",
					"weight": 63.16
				},
				{
					"address": {
						"address": "385 Fifth Street",
						"city": "Houston",
						"coordinates": {
							"lat": 22.815468,
							"lng": 115.608581
						},
						"country": "United States",
						"postalCode": "38807",
						"state": "Alabama",
						"stateCode": "AL"
					},
					"age": 35,
					"bank": {
						"cardExpire": "02/27",
						"cardNumber": "6737807858721625",
						"cardType": "Elo",
						"currency": "SEK",
						"iban": "83IDT77FWYLCJVR8ISDACFH0"
					},
					"birthDate": "1989-8-10",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "395 Main Street",
							"city": "Los Angeles",
							"coordinates": {
								"lat": 79.098326,
								"lng": -119.624845
							},
							"country": "United States",
							"postalCode": "73442",
							"state": "New Hampshire",
							"stateCode": "NH"
						},
						"department": "Support",
						"name": "Spinka - Dickinson",
						"title": "Support Specialist"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "912-602",
					"email": "michael.williams@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Michael",
					"gender": "male",
					"hair": {
						"color": "Green",
						"type": "Straight"
					},
					"height": 186.22,
					"id": 2,
					"image": "https://dummyjson.com/icon/michaelw/128",
					"ip": "12.13.116.142",
					"isOldest": true,
					"lastName": "Williams",
					"macAddress": "79:15:78:99:60:aa",
					"maidenName": "",
					"password": "michaelwpass",
					"phone": "+49 258-627-6644",
					"role": "admin",
					"ssn": "108-953-962",
					"university": "Ohio State University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
					"username": "michaelw",
					"weight": 76.32
				},
				{
					"address": {
						"address": "1642 Ninth Street",
						"city": "Washington",
						"coordinates": {
							"lat": 45.289366,
							"lng": 46.832664
						},
						"country": "United States",
						"postalCode": "32822",
						"state": "Alabama",
						"stateCode": "AL"
					},
					"age": 42,
					"bank": {
						"cardExpire": "04/25",
						"cardNumber": "7795895470082859",
						"cardType": "Korean Express",
						"currency": "SEK",
						"iban": "90XYKT83LMM7AARZ8JN958JC"
					},
					"birthDate": "1982-11-6",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1896 Washington Street",
							"city": "Dallas",
							"coordinates": {
								"lat": 20.086743,
								"lng": -34.577107
							},
							"country": "United States",
							"postalCode": "88511",
							"state": "Nevada",
							"stateCode": "NV"
						},
						"department": "Research and Development",
						"name": "Schiller - Zieme",
						"title": "Accountant"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "963-113",
					"email": "sophia.brown@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Sophia",
					"gender": "female",
					"hair": {
						"color": "White",
						"type": "Wavy"
					},
					"height": 177.72,
					"id": 3,
					"image": "https://dummyjson.com/icon/sophiab/128",
					"ip": "214.225.51.195",
					"isOldest": true,
					"lastName": "Brown",
					"macAddress": "12:a3:d3:6f:5c:5b",
					"maidenName": "",
					"password": "sophiabpass",
					"phone": "+81 210-652-2785",
					"role": "admin",
					"ssn": "638-461-822",
					"university": "Pepperdine University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "sophiab",
					"weight": 52.6
				},
				{
					"address": {
						"address": "238 Jefferson Street",
						"city": "Seattle",
						"coordinates": {
							"lat": 16.782513,
							"lng": -139.34723
						},
						"country": "United States",
						"postalCode": "68354",
						"state": "Pennsylvania",
						"stateCode": "PA"
					},
					"age": 45,
					"bank": {
						"cardExpire": "05/29",
						"cardNumber": "5005519846254763",
						"cardType": "Mastercard",
						"currency": "INR",
						"iban": "7N7ZH1PJ8Q4WU1K965HQQR27"
					},
					"birthDate": "1979-5-4",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "1622 Lincoln Street",
							"city": "Fort Worth",
							"coordinates": {
								"lat": 54.91193,
								"lng": -79.498328
							},
							"country": "United States",
							"postalCode": "27768",
							"state": "Pennsylvania",
							"stateCode": "PA"
						},
						"department": "Support",
						"name": "Pagac and Sons",
						"title": "Research Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "904-810",
					"email": "james.davis@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "James",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Straight"
					},
					"height": 193.31,
					"id": 4,
					"image": "https://dummyjson.com/icon/jamesd/128",
					"ip": "101.118.131.66",
					"isOldest": true,
					"lastName": "Davis",
					"macAddress": "10:7d:df:1f:97:58",
					"maidenName": "",
					"password": "jamesdpass",
					"phone": "+49 614-958-9364",
					"role": "admin",
					"ssn": "116-951-314",
					"university": "University of Southern California",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "jamesd",
					"weight": 62.1
				},
				{
					"address": {
						"address": "607 Fourth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 0.505589,
							"lng": -157.43281
						},
						"country": "United States",
						"postalCode": "26593",
						"state": "Colorado",
						"stateCode": "CO"
					},
					"age": 30,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "5772950119588627",
						"cardType": "American Express",
						"currency": "CAD",
						"iban": "TAVHURD845KVBTB8W81AQXRY"
					},
					"birthDate": "1994-6-13",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "1460 Sixth Street",
							"city": "San Antonio",
							"coordinates": {
								"lat": 44.346545,
								"lng": -26.944701
							},
							"country": "United States",
							"postalCode": "21965",
							"state": "Idaho",
							"stateCode": "ID"
						},
						"department": "Human Resources",
						"name": "Graham - Gulgowski",
						"title": "Quality Assurance Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "403-505",
					"email": "emma.miller@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Emma",
					"gender": "female",
					"hair": {
						"color": "White",
						"type": "Straight"
					},
					"height": 192.8,
					"id": 5,
					"image": "https://dummyjson.com/icon/emmaj/128",
					"ip": "224.126.22.183",
					"isOldest": false,
					"lastName": "Miller",
					"macAddress": "32:b9:7e:8d:f5:e8",
					"maidenName": "Johnson",
					"password": "emmajpass",
					"phone": "+91 759-776-1614",
					"role": "admin",
					"ssn": "526-210-885",
					"university": "Northeastern University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
					"username": "emmaj",
					"weight": 63.62
				},
				{
					"address": {
						"address": "547 First Street",
						"city": "Fort Worth",
						"coordinates": {
							"lat": 75.32627,
							"lng": -26.15285
						},
						"country": "United States",
						"postalCode": "83843",
						"state": "Tennessee",
						"stateCode": "TN"
					},
					"age": 22,
					"bank": {
						"cardExpire": "05/28",
						"cardNumber": "6771923832947881",
						"cardType": "Diners Club International",
						"currency": "BRL",
						"iban": "V6H0O5OE3Q4JVKWDTYWZABMD"
					},
					"birthDate": "2002-4-20",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "425 Sixth Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": 74.986644,
								"lng": -132.916888
							},
							"country": "United States",
							"postalCode": "74263",
							"state": "Oklahoma",
							"stateCode": "OK"
						},
						"department": "Product Management",
						"name": "Pfannerstill Inc",
						"title": "Research Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "921-709",
					"email": "olivia.wilson@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Olivia",
					"gender": "female",
					"hair": {
						"color": "Gray",
						"type": "Curly"
					},
					"height": 182.61,
					"id": 6,
					"image": "https://dummyjson.com/icon/oliviaw/128",
					"ip": "249.178.112.207",
					"isOldest": false,
					"lastName": "Wilson",
					"macAddress": "9c:7f:ea:34:18:19",
					"maidenName": "",
					"password": "oliviawpass",
					"phone": "+91 607-295-6448",
					"role": "moderator",
					"ssn": "836-772-168",
					"university": "University of North Carolina--Chapel Hill",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
					"username": "oliviaw",
					"weight": 58
				},
				{
					"address": {
						"address": "664 Maple Street",
						"city": "Indianapolis",
						"coordinates": {
							"lat": 35.289664,
							"lng": 7.063255
						},
						"country": "United States",
						"postalCode": "86684",
						"state": "Delaware",
						"stateCode": "DE"
					},
					"age": 38,
					"bank": {
						"cardExpire": "05/25",
						"cardNumber": "7344951706130140",
						"cardType": "JCB",
						"currency": "EUR",
						"iban": "49V4GVDVMP0MHIDD4VXMQ3A2"
					},
					"birthDate": "1986-10-20",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "996 Eighth Street",
							"city": "Washington",
							"coordinates": {
								"lat": -75.462366,
								"lng": -128.025697
							},
							"country": "United States",
							"postalCode": "27858",
							"state": "Kansas",
							"stateCode": "KS"
						},
						"department": "Engineering",
						"name": "Dickens - Beahan",
						"title": "Web Developer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "638-127",
					"email": "alexander.jones@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Alexander",
					"gender": "male",
					"hair": {
						"color": "White",
						"type": "Straight"
					},
					"height": 153.89,
					"id": 7,
					"image": "https://dummyjson.com/icon/alexanderj/128",
					"ip": "166.204.84.32",
					"isOldest": false,
					"lastName": "Jones",
					"macAddress": "d2:64:58:2d:1c:46",
					"maidenName": "",
					"password": "alexanderjpass",
					"phone": "+61 260-824-4986",
					"role": "moderator",
					"ssn": "722-993-925",
					"university": "University of Illinois--Urbana-Champaign",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "alexanderj",
					"weight": 77.42
				},
				{
					"address": {
						"address": "1197 First Street",
						"city": "Fort Worth",
						"coordinates": {
							"lat": -81.194833,
							"lng": -87.948158
						},
						"country": "United States",
						"postalCode": "24771",
						"state": "Rhode Island",
						"stateCode": "RI"
					},
					"age": 27,
					"bank": {
						"cardExpire": "01/29",
						"cardNumber": "6412128967460199",
						"cardType": "Maestro",
						"currency": "CNY",
						"iban": "TS66YQ8R16OX7IJKLUONDQHP"
					},
					"birthDate": "1997-8-25",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "930 Lincoln Street",
							"city": "Austin",
							"coordinates": {
								"lat": 87.970083,
								"lng": -42.769351
							},
							"country": "United States",
							"postalCode": "47592",
							"state": "Colorado",
							"stateCode": "CO"
						},
						"department": "Marketing",
						"name": "Nikolaus Inc",
						"title": "Chief Executive Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "297-762",
					"email": "ava.taylor@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Ava",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Kinky"
					},
					"height": 168.47,
					"id": 8,
					"image": "https://dummyjson.com/icon/avat/128",
					"ip": "150.73.197.233",
					"isOldest": true,
					"lastName": "Taylor",
					"macAddress": "8d:2e:c2:d6:e7:a8",
					"maidenName": "",
					"password": "avatpass",
					"phone": "+1 458-853-7877",
					"role": "moderator",
					"ssn": "257-419-109",
					"university": "University of Wisconsin--Madison",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "avat",
					"weight": 57.08
				},
				{
					"address": {
						"address": "466 Pine Street",
						"city": "San Antonio",
						"coordinates": {
							"lat": 74.074918,
							"lng": -25.312703
						},
						"country": "United States",
						"postalCode": "72360",
						"state": "Louisiana",
						"stateCode": "LA"
					},
					"age": 33,
					"bank": {
						"cardExpire": "02/25",
						"cardNumber": "7183482484317509",
						"cardType": "Visa",
						"currency": "CAD",
						"iban": "CW5U5KS23U7JYD22TVQL7SIH"
					},
					"birthDate": "1991-2-12",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "1597 Oak Street",
							"city": "Chicago",
							"coordinates": {
								"lat": -67.45208,
								"lng": -23.209886
							},
							"country": "United States",
							"postalCode": "28100",
							"state": "Florida",
							"stateCode": "FL"
						},
						"department": "Support",
						"name": "Gorczany - Gottlieb",
						"title": "Legal Counsel"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "790-434",
					"email": "ethan.martinez@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Ethan",
					"gender": "male",
					"hair": {
						"color": "Purple",
						"type": "Curly"
					},
					"height": 159.19,
					"id": 9,
					"image": "https://dummyjson.com/icon/ethanm/128",
					"ip": "63.191.127.71",
					"isOldest": true,
					"lastName": "Martinez",
					"macAddress": "59:e:9e:e3:29:da",
					"maidenName": "",
					"password": "ethanmpass",
					"phone": "+92 933-608-5081",
					"role": "moderator",
					"ssn": "569-650-348",
					"university": "Syracuse University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "ethanm",
					"weight": 68.81
				},
				{
					"address": {
						"address": "1964 Oak Street",
						"city": "New York",
						"coordinates": {
							"lat": 41.331324,
							"lng": 151.782727
						},
						"country": "United States",
						"postalCode": "89352",
						"state": "Utah",
						"stateCode": "UT"
					},
					"age": 31,
					"bank": {
						"cardExpire": "05/27",
						"cardNumber": "6118714010128731",
						"cardType": "NPS",
						"currency": "CNY",
						"iban": "GBZRGDMKUOTO34HBCI7A986J"
					},
					"birthDate": "1993-6-10",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "1029 Adams Street",
							"city": "San Diego",
							"coordinates": {
								"lat": -25.843393,
								"lng": -62.692681
							},
							"country": "United States",
							"postalCode": "63847",
							"state": "Maryland",
							"stateCode": "MD"
						},
						"department": "Marketing",
						"name": "Pollich - Hilpert",
						"title": "Chief Financial Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "127-297",
					"email": "isabella.anderson@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Isabella",
					"gender": "female",
					"hair": {
						"color": "Blonde",
						"type": "Curly"
					},
					"height": 150.56,
					"id": 10,
					"image": "https://dummyjson.com/icon/isabellad/128",
					"ip": "114.9.114.205",
					"isOldest": false,
					"lastName": "Anderson",
					"macAddress": "b1:b0:d0:a2:82:80",
					"maidenName": "Davis",
					"password": "isabelladpass",
					"phone": "+49 770-658-4885",
					"role": "moderator",
					"ssn": "902-438-728",
					"university": "California Institute of Technology (Caltech)",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "isabellad",
					"weight": 50.1
				},
				{
					"address": {
						"address": "576 Fifth Street",
						"city": "Denver",
						"coordinates": {
							"lat": -66.218177,
							"lng": -145.340165
						},
						"country": "United States",
						"postalCode": "57252",
						"state": "South Dakota",
						"stateCode": "SD"
					},
					"age": 29,
					"bank": {
						"cardExpire": "02/27",
						"cardNumber": "2302893002194899",
						"cardType": "Discover",
						"currency": "GBP",
						"iban": "O8ENPRB9UVBL2EFZ7601KC09"
					},
					"birthDate": "1995-6-6",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "27 Cedar Street",
							"city": "Philadelphia",
							"coordinates": {
								"lat": -81.841588,
								"lng": 31.79423
							},
							"country": "United States",
							"postalCode": "79574",
							"state": "Connecticut",
							"stateCode": "CT"
						},
						"department": "Services",
						"name": "Considine - Torp",
						"title": "Web Developer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "326-604",
					"email": "liam.garcia@x.dummyjson.com",
					"eyeColor": "Violet",
					"firstName": "Liam",
					"gender": "male",
					"hair": {
						"color": "Red",
						"type": "Wavy"
					},
					"height": 162.32,
					"id": 11,
					"image": "https://dummyjson.com/icon/liamg/128",
					"ip": "56.201.85.9",
					"isOldest": false,
					"lastName": "Garcia",
					"macAddress": "31:9a:28:8b:99:6c",
					"maidenName": "",
					"password": "liamgpass",
					"phone": "+92 870-217-6201",
					"role": "moderator",
					"ssn": "933-784-949",
					"university": "Ohio State University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "liamg",
					"weight": 93.16
				},
				{
					"address": {
						"address": "1627 Sixth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 24.857497,
							"lng": -34.865429
						},
						"country": "United States",
						"postalCode": "41810",
						"state": "West Virginia",
						"stateCode": "WV"
					},
					"age": 24,
					"bank": {
						"cardExpire": "05/26",
						"cardNumber": "1539872303456158",
						"cardType": "Carte Bancaire",
						"currency": "CAD",
						"iban": "EBMD95RLK8B82ZAZNXBJ09V5"
					},
					"birthDate": "2000-8-4",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1039 Washington Street",
							"city": "Philadelphia",
							"coordinates": {
								"lat": 85.455933,
								"lng": 164.246103
							},
							"country": "United States",
							"postalCode": "57518",
							"state": "New Jersey",
							"stateCode": "NJ"
						},
						"department": "Accounting",
						"name": "Miller, Schowalter and Wisozk",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "754-660",
					"email": "mia.rodriguez@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Mia",
					"gender": "female",
					"hair": {
						"color": "Purple",
						"type": "Wavy"
					},
					"height": 188.08,
					"id": 12,
					"image": "https://dummyjson.com/icon/miar/128",
					"ip": "11.72.253.90",
					"isOldest": false,
					"lastName": "Rodriguez",
					"macAddress": "53:d7:a4:6:1e:58",
					"maidenName": "",
					"password": "miarpass",
					"phone": "+49 989-461-8403",
					"role": "moderator",
					"ssn": "749-524-124",
					"university": "William & Mary",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "miar",
					"weight": 56.03
				},
				{
					"address": {
						"address": "1413 Maple Street",
						"city": "New York",
						"coordinates": {
							"lat": -25.0377,
							"lng": -151.70469
						},
						"country": "United States",
						"postalCode": "73696",
						"state": "North Dakota",
						"stateCode": "ND"
					},
					"age": 40,
					"bank": {
						"cardExpire": "05/26",
						"cardNumber": "1681772579326385",
						"cardType": "Discover",
						"currency": "SEK",
						"iban": "G4UIZKIQVPJM9D31XQVR1E9Z"
					},
					"birthDate": "1984-6-5",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "62 Third Street",
							"city": "Seattle",
							"coordinates": {
								"lat": 19.490447,
								"lng": -13.173207
							},
							"country": "United States",
							"postalCode": "83474",
							"state": "Oregon",
							"stateCode": "OR"
						},
						"department": "Engineering",
						"name": "Botsford, Marquardt and Roberts",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "877-628",
					"email": "noah.hernandez@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Noah",
					"gender": "male",
					"hair": {
						"color": "Red",
						"type": "Curly"
					},
					"height": 188.62,
					"id": 13,
					"image": "https://dummyjson.com/icon/noahh/128",
					"ip": "169.154.126.57",
					"isOldest": true,
					"lastName": "Hernandez",
					"macAddress": "d4:fe:ae:8f:eb:a3",
					"maidenName": "",
					"password": "noahhpass",
					"phone": "+49 393-605-6968",
					"role": "moderator",
					"ssn": "660-847-389",
					"university": "New York University (NYU)",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "noahh",
					"weight": 69.49
				},
				{
					"address": {
						"address": "208 Second Street",
						"city": "Columbus",
						"coordinates": {
							"lat": -44.443762,
							"lng": -151.420561
						},
						"country": "United States",
						"postalCode": "42044",
						"state": "Ohio",
						"stateCode": "OH"
					},
					"age": 36,
					"bank": {
						"cardExpire": "02/27",
						"cardNumber": "5675368650551956",
						"cardType": "Maestro",
						"currency": "CNY",
						"iban": "FKK6U634LGI3E7N517DLVVTL"
					},
					"birthDate": "1988-6-8",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "569 Jefferson Street",
							"city": "Los Angeles",
							"coordinates": {
								"lat": -18.371256,
								"lng": 22.566258
							},
							"country": "United States",
							"postalCode": "17779",
							"state": "Montana",
							"stateCode": "MT"
						},
						"department": "Accounting",
						"name": "Zulauf and Sons",
						"title": "Chief Executive Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "364-782",
					"email": "charlotte.lopez@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Charlotte",
					"gender": "female",
					"hair": {
						"color": "Gray",
						"type": "Kinky"
					},
					"height": 178.92,
					"id": 14,
					"image": "https://dummyjson.com/icon/charlottem/128",
					"ip": "119.103.95.60",
					"isOldest": true,
					"lastName": "Lopez",
					"macAddress": "f6:ff:37:aa:6c:f1",
					"maidenName": "Martinez",
					"password": "charlottempass",
					"phone": "+44 373-953-5028",
					"role": "moderator",
					"ssn": "255-491-479",
					"university": "Northeastern University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "charlottem",
					"weight": 82.46
				},
				{
					"address": {
						"address": "31 Maple Street",
						"city": "San Jose",
						"coordinates": {
							"lat": 8.152876,
							"lng": 113.29799
						},
						"country": "United States",
						"postalCode": "78243",
						"state": "Utah",
						"stateCode": "UT"
					},
					"age": 32,
					"bank": {
						"cardExpire": "03/27",
						"cardNumber": "6053000793215148",
						"cardType": "Mir",
						"currency": "EUR",
						"iban": "AR01SNDMKGECX0EYH7UCW61W"
					},
					"birthDate": "1992-3-27",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "1538 Eighth Street",
							"city": "San Jose",
							"coordinates": {
								"lat": 24.169361,
								"lng": -29.395167
							},
							"country": "United States",
							"postalCode": "29673",
							"state": "Missouri",
							"stateCode": "MO"
						},
						"department": "Marketing",
						"name": "Spinka - Dickinson",
						"title": "Software Architect"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "830-515",
					"email": "william.gonzalez@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "William",
					"gender": "male",
					"hair": {
						"color": "Gray",
						"type": "Curly"
					},
					"height": 173.21,
					"id": 15,
					"image": "https://dummyjson.com/icon/williamg/128",
					"ip": "250.2.241.204",
					"isOldest": true,
					"lastName": "Gonzalez",
					"macAddress": "f5:68:28:f9:ec:89",
					"maidenName": "",
					"password": "williamgpass",
					"phone": "+81 905-252-7319",
					"role": "moderator",
					"ssn": "690-544-755",
					"university": "Tufts University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "williamg",
					"weight": 82.41
				},
				{
					"address": {
						"address": "1125 First Street",
						"city": "Columbus",
						"coordinates": {
							"lat": 12.789127,
							"lng": 85.792598
						},
						"country": "United States",
						"postalCode": "30973",
						"state": "Iowa",
						"stateCode": "IA"
					},
					"age": 25,
					"bank": {
						"cardExpire": "04/27",
						"cardNumber": "0961014686718571",
						"cardType": "Carte Bancaire",
						"currency": "USD",
						"iban": "28JYZAY4KYT48YI8QW40PWXR"
					},
					"birthDate": "1999-3-10",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "183 Maple Street",
							"city": "New York",
							"coordinates": {
								"lat": -53.318189,
								"lng": 105.835271
							},
							"country": "United States",
							"postalCode": "45238",
							"state": "Rhode Island",
							"stateCode": "RI"
						},
						"department": "Accounting",
						"name": "Herzog Inc",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "348-493",
					"email": "avery.perez@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Avery",
					"gender": "female",
					"hair": {
						"color": "Green",
						"type": "Curly"
					},
					"height": 172.68,
					"id": 16,
					"image": "https://dummyjson.com/icon/averyp/128",
					"ip": "131.217.4.214",
					"isOldest": false,
					"lastName": "Perez",
					"macAddress": "b3:ff:f3:c5:37:46",
					"maidenName": "",
					"password": "averyppass",
					"phone": "+61 731-431-3457",
					"role": "user",
					"ssn": "679-523-686",
					"university": "Harvard University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "averyp",
					"weight": 93.9
				},
				{
					"address": {
						"address": "1170 Lincoln Street",
						"city": "San Diego",
						"coordinates": {
							"lat": -83.31484,
							"lng": 11.768071
						},
						"country": "United States",
						"postalCode": "43423",
						"state": "Wyoming",
						"stateCode": "WY"
					},
					"age": 37,
					"bank": {
						"cardExpire": "04/29",
						"cardNumber": "4557521697420096",
						"cardType": "UnionPay",
						"currency": "SEK",
						"iban": "KN8XAPR2J5UB8AKDI1EVJ56R"
					},
					"birthDate": "1987-10-13",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "1802 Ninth Street",
							"city": "San Diego",
							"coordinates": {
								"lat": 29.034592,
								"lng": -78.004598
							},
							"country": "United States",
							"postalCode": "89416",
							"state": "Minnesota",
							"stateCode": "MN"
						},
						"department": "Support",
						"name": "Predovic - Johns",
						"title": "Chief Financial Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "604-817",
					"email": "evelyn.sanchez@x.dummyjson.com",
					"eyeColor": "Violet",
					"firstName": "Evelyn",
					"gender": "female",
					"hair": {
						"color": "Blue",
						"type": "Curly"
					},
					"height": 184.08,
					"id": 17,
					"image": "https://dummyjson.com/icon/evelyns/128",
					"ip": "87.114.135.146",
					"isOldest": true,
					"lastName": "Sanchez",
					"macAddress": "f8:e5:bd:43:bc:d8",
					"maidenName": "",
					"password": "evelynspass",
					"phone": "+1 623-880-6871",
					"role": "user",
					"ssn": "689-332-644",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "evelyns",
					"weight": 83.15
				},
				{
					"address": {
						"address": "907 Seventh Street",
						"city": "Columbus",
						"coordinates": {
							"lat": -64.846516,
							"lng": 174.775744
						},
						"country": "United States",
						"postalCode": "78805",
						"state": "Arkansas",
						"stateCode": "AR"
					},
					"age": 31,
					"bank": {
						"cardExpire": "05/26",
						"cardNumber": "7884268130452098",
						"cardType": "UnionPay",
						"currency": "NZD",
						"iban": "HZM7V9PYHPZBN72IDFPXGN8Q"
					},
					"birthDate": "1993-10-26",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "947 Main Street",
							"city": "Denver",
							"coordinates": {
								"lat": -24.654063,
								"lng": -147.255268
							},
							"country": "United States",
							"postalCode": "71896",
							"state": "Minnesota",
							"stateCode": "MN"
						},
						"department": "Training",
						"name": "Jast - Nader",
						"title": "Data Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "576-218",
					"email": "logan.torres@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Logan",
					"gender": "male",
					"hair": {
						"color": "Green",
						"type": "Curly"
					},
					"height": 190.04,
					"id": 18,
					"image": "https://dummyjson.com/icon/logant/128",
					"ip": "155.98.15.162",
					"isOldest": false,
					"lastName": "Torres",
					"macAddress": "40:d:5c:1:7d:bf",
					"maidenName": "",
					"password": "logantpass",
					"phone": "+81 507-434-8733",
					"role": "user",
					"ssn": "806-639-934",
					"university": "University of Illinois--Urbana-Champaign",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "logant",
					"weight": 72.43
				},
				{
					"address": {
						"address": "996 Oak Street",
						"city": "Chicago",
						"coordinates": {
							"lat": 44.321308,
							"lng": -3.723903
						},
						"country": "United States",
						"postalCode": "11407",
						"state": "New Mexico",
						"stateCode": "NM"
					},
					"age": 28,
					"bank": {
						"cardExpire": "02/28",
						"cardNumber": "4832361886407551",
						"cardType": "RuPay",
						"currency": "BRL",
						"iban": "O02LHDNNFCVSM6D4H81DIQHE"
					},
					"birthDate": "1996-10-11",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "1402 Adams Street",
							"city": "Austin",
							"coordinates": {
								"lat": 25.672938,
								"lng": -76.54967
							},
							"country": "United States",
							"postalCode": "51456",
							"state": "Wisconsin",
							"stateCode": "WI"
						},
						"department": "Human Resources",
						"name": "Prohaska - Thiel",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "173-637",
					"email": "abigail.rivera@x.dummyjson.com",
					"eyeColor": "Violet",
					"firstName": "Abigail",
					"gender": "female",
					"hair": {
						"color": "Blue",
						"type": "Kinky"
					},
					"height": 186.39,
					"id": 19,
					"image": "https://dummyjson.com/icon/abigailr/128",
					"ip": "19.183.240.94",
					"isOldest": false,
					"lastName": "Rivera",
					"macAddress": "1d:a6:58:2a:e5:e4",
					"maidenName": "",
					"password": "abigailrpass",
					"phone": "+91 228-363-7806",
					"role": "user",
					"ssn": "655-823-929",
					"university": "California Institute of Technology (Caltech)",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
					"username": "abigailr",
					"weight": 74.61
				},
				{
					"address": {
						"address": "1873 Main Street",
						"city": "New York",
						"coordinates": {
							"lat": 34.722451,
							"lng": 63.448927
						},
						"country": "United States",
						"postalCode": "26600",
						"state": "Arkansas",
						"stateCode": "AR"
					},
					"age": 34,
					"bank": {
						"cardExpire": "04/26",
						"cardNumber": "2109192842527801",
						"cardType": "BC Card",
						"currency": "EUR",
						"iban": "TX26FO9B7YR2VHYDSJBE32AX"
					},
					"birthDate": "1990-11-30",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1706 First Street",
							"city": "Chicago",
							"coordinates": {
								"lat": -80.416937,
								"lng": -83.224516
							},
							"country": "United States",
							"postalCode": "34725",
							"state": "Hawaii",
							"stateCode": "HI"
						},
						"department": "Legal",
						"name": "Kuhlman LLC",
						"title": "Web Developer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "843-260",
					"email": "jackson.evans@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Jackson",
					"gender": "male",
					"hair": {
						"color": "Red",
						"type": "Straight"
					},
					"height": 162.57,
					"id": 20,
					"image": "https://dummyjson.com/icon/jacksone/128",
					"ip": "221.127.144.198",
					"isOldest": false,
					"lastName": "Evans",
					"macAddress": "81:14:1:97:88:85",
					"maidenName": "",
					"password": "jacksonepass",
					"phone": "+44 468-628-6686",
					"role": "user",
					"ssn": "248-787-886",
					"university": "Ohio State University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "jacksone",
					"weight": 74.37
				},
				{
					"address": {
						"address": "1892 Lincoln Street",
						"city": "Philadelphia",
						"coordinates": {
							"lat": 52.993694,
							"lng": 160.486892
						},
						"country": "United States",
						"postalCode": "62091",
						"state": "New Jersey",
						"stateCode": "NJ"
					},
					"age": 26,
					"bank": {
						"cardExpire": "04/28",
						"cardNumber": "5549175461210252",
						"cardType": "Mir",
						"currency": "CNY",
						"iban": "Y0WSN5IED255808SIYBUOMWO"
					},
					"birthDate": "1998-3-7",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "1438 Main Street",
							"city": "San Diego",
							"coordinates": {
								"lat": 1.629613,
								"lng": 23.232982
							},
							"country": "United States",
							"postalCode": "63144",
							"state": "Delaware",
							"stateCode": "DE"
						},
						"department": "Engineering",
						"name": "Mayer - Smitham",
						"title": "Chief Technology Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "716-166",
					"email": "madison.collins@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Madison",
					"gender": "female",
					"hair": {
						"color": "Gray",
						"type": "Curly"
					},
					"height": 189.28,
					"id": 21,
					"image": "https://dummyjson.com/icon/madisonc/128",
					"ip": "85.34.1.204",
					"isOldest": false,
					"lastName": "Collins",
					"macAddress": "13:b0:d0:23:4d:26",
					"maidenName": "",
					"password": "madisoncpass",
					"phone": "+81 259-957-5711",
					"role": "user",
					"ssn": "457-258-950",
					"university": "University of Pennsylvania",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "madisonc",
					"weight": 56.96
				},
				{
					"address": {
						"address": "1701 Eighth Street",
						"city": "Columbus",
						"coordinates": {
							"lat": -54.833799,
							"lng": -174.504027
						},
						"country": "United States",
						"postalCode": "31585",
						"state": "Illinois",
						"stateCode": "IL"
					},
					"age": 33,
					"bank": {
						"cardExpire": "05/27",
						"cardNumber": "0798116671286564",
						"cardType": "JCB",
						"currency": "GBP",
						"iban": "E1XUHCC1N39WGU6XESSK1CAO"
					},
					"birthDate": "1991-10-22",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "155 Ninth Street",
							"city": "Washington",
							"coordinates": {
								"lat": 61.279254,
								"lng": -12.607767
							},
							"country": "United States",
							"postalCode": "19039",
							"state": "South Dakota",
							"stateCode": "SD"
						},
						"department": "Legal",
						"name": "Langworth Group",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "520-394",
					"email": "elijah.stewart@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Elijah",
					"gender": "male",
					"hair": {
						"color": "Purple",
						"type": "Straight"
					},
					"height": 195.33,
					"id": 22,
					"image": "https://dummyjson.com/icon/elijahs/128",
					"ip": "23.87.135.62",
					"isOldest": false,
					"lastName": "Stewart",
					"macAddress": "75:17:c6:35:fc:6d",
					"maidenName": "",
					"password": "elijahspass",
					"phone": "+44 468-357-7872",
					"role": "user",
					"ssn": "287-380-801",
					"university": "Georgetown University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "elijahs",
					"weight": 81.64
				},
				{
					"address": {
						"address": "401 Fourth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -30.190759,
							"lng": -58.705979
						},
						"country": "United States",
						"postalCode": "54972",
						"state": "New Jersey",
						"stateCode": "NJ"
					},
					"age": 39,
					"bank": {
						"cardExpire": "05/28",
						"cardNumber": "3150496938377346",
						"cardType": "American Express",
						"currency": "PKR",
						"iban": "P7YLGOOBWBD1SRWDWSFO3PZ0"
					},
					"birthDate": "1985-4-21",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "269 Third Street",
							"city": "Houston",
							"coordinates": {
								"lat": 40.098115,
								"lng": -1.762972
							},
							"country": "United States",
							"postalCode": "10385",
							"state": "North Carolina",
							"stateCode": "NC"
						},
						"department": "Sales",
						"name": "Grady LLC",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "913-597",
					"email": "chloe.morales@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Chloe",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Kinky"
					},
					"height": 185.07,
					"id": 23,
					"image": "https://dummyjson.com/icon/chloem/128",
					"ip": "66.78.20.21",
					"isOldest": true,
					"lastName": "Morales",
					"macAddress": "fc:f:29:e1:37:b8",
					"maidenName": "",
					"password": "chloempass",
					"phone": "+92 468-541-7133",
					"role": "user",
					"ssn": "938-883-163",
					"university": "Syracuse University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "chloem",
					"weight": 63.97
				},
				{
					"address": {
						"address": "1578 Fourth Street",
						"city": "Columbus",
						"coordinates": {
							"lat": -32.828675,
							"lng": -82.557354
						},
						"country": "United States",
						"postalCode": "20673",
						"state": "Missouri",
						"stateCode": "MO"
					},
					"age": 30,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "5545852224851851",
						"cardType": "JCB",
						"currency": "TRY",
						"iban": "WEBE9SBX588VFUCVCA6KFHWB"
					},
					"birthDate": "1994-6-2",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "1967 Jefferson Street",
							"city": "Dallas",
							"coordinates": {
								"lat": 75.982676,
								"lng": 164.459743
							},
							"country": "United States",
							"postalCode": "78527",
							"state": "Louisiana",
							"stateCode": "LA"
						},
						"department": "Accounting",
						"name": "Spinka LLC",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "229-249",
					"email": "mateo.nguyen@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Mateo",
					"gender": "male",
					"hair": {
						"color": "Purple",
						"type": "Wavy"
					},
					"height": 174.29,
					"id": 24,
					"image": "https://dummyjson.com/icon/mateon/128",
					"ip": "192.57.144.7",
					"isOldest": false,
					"lastName": "Nguyen",
					"macAddress": "a7:26:10:7a:36:29",
					"maidenName": "",
					"password": "mateonpass",
					"phone": "+1 341-597-6694",
					"role": "user",
					"ssn": "416-877-230",
					"university": "Columbia University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "mateon",
					"weight": 59.98
				},
				{
					"address": {
						"address": "1591 Adams Street",
						"city": "Philadelphia",
						"coordinates": {
							"lat": -26.832913,
							"lng": -75.445017
						},
						"country": "United States",
						"postalCode": "69521",
						"state": "New York",
						"stateCode": "NY"
					},
					"age": 27,
					"bank": {
						"cardExpire": "04/26",
						"cardNumber": "1298153007505587",
						"cardType": "RuPay",
						"currency": "JPY",
						"iban": "DJI19LCUNUHP6YSGPY52D5VG"
					},
					"birthDate": "1997-3-3",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "16 Maple Street",
							"city": "Austin",
							"coordinates": {
								"lat": -15.423746,
								"lng": 149.298887
							},
							"country": "United States",
							"postalCode": "68274",
							"state": "North Carolina",
							"stateCode": "NC"
						},
						"department": "Legal",
						"name": "Leffler, Rolfson and Becker",
						"title": "Business Development Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "592-557",
					"email": "harper.kelly@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Harper",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Curly"
					},
					"height": 184.32,
					"id": 25,
					"image": "https://dummyjson.com/icon/harpere/128",
					"ip": "174.111.61.162",
					"isOldest": true,
					"lastName": "Kelly",
					"macAddress": "b:ff:33:67:94:e4",
					"maidenName": "Evans",
					"password": "harperepass",
					"phone": "+92 518-863-2863",
					"role": "user",
					"ssn": "209-544-548",
					"university": "Boston College",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "harpere",
					"weight": 81.69
				},
				{
					"address": {
						"address": "1065 Lincoln Street",
						"city": "Dallas",
						"coordinates": {
							"lat": 67.768359,
							"lng": 71.268643
						},
						"country": "United States",
						"postalCode": "84898",
						"state": "Maine",
						"stateCode": "ME"
					},
					"age": 35,
					"bank": {
						"cardExpire": "03/28",
						"cardNumber": "9584313788145560",
						"cardType": "RuPay",
						"currency": "INR",
						"iban": "X4UPULQG61VIGA97USY7AAEB"
					},
					"birthDate": "1989-2-5",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "584 Ninth Street",
							"city": "Jacksonville",
							"coordinates": {
								"lat": 26.014021,
								"lng": 40.572436
							},
							"country": "United States",
							"postalCode": "45633",
							"state": "Wisconsin",
							"stateCode": "WI"
						},
						"department": "Accounting",
						"name": "Tromp, Gaylord and Weber",
						"title": "Project Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "569-275",
					"email": "evelyn.gonzalez@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Evelyn",
					"gender": "female",
					"hair": {
						"color": "Black",
						"type": "Wavy"
					},
					"height": 168.94,
					"id": 26,
					"image": "https://dummyjson.com/icon/evelyng/128",
					"ip": "42.52.74.232",
					"isOldest": false,
					"lastName": "Gonzalez",
					"macAddress": "89:5e:5a:2a:72:42",
					"maidenName": "",
					"password": "evelyngpass",
					"phone": "+61 708-508-4638",
					"role": "user",
					"ssn": "487-680-127",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "evelyng",
					"weight": 58.47
				},
				{
					"address": {
						"address": "1163 Pine Street",
						"city": "Los Angeles",
						"coordinates": {
							"lat": -3.456681,
							"lng": -134.937482
						},
						"country": "United States",
						"postalCode": "58781",
						"state": "Nevada",
						"stateCode": "NV"
					},
					"age": 41,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "8452555751345228",
						"cardType": "Korean Express",
						"currency": "NZD",
						"iban": "A8DBPECO4X6D09WYOVT8UZK8"
					},
					"birthDate": "1983-12-25",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "938 Fifth Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": 21.323588,
								"lng": -83.531427
							},
							"country": "United States",
							"postalCode": "45305",
							"state": "South Dakota",
							"stateCode": "SD"
						},
						"department": "Support",
						"name": "Morissette, Baumbach and Auer",
						"title": "Legal Counsel"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "585-905",
					"email": "daniel.cook@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Daniel",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Curly"
					},
					"height": 186.21,
					"id": 27,
					"image": "https://dummyjson.com/icon/danielc/128",
					"ip": "1.61.73.142",
					"isOldest": true,
					"lastName": "Cook",
					"macAddress": "6e:73:dc:3a:85:10",
					"maidenName": "",
					"password": "danielcpass",
					"phone": "+44 254-761-6843",
					"role": "user",
					"ssn": "645-515-583",
					"university": "Columbia University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
					"username": "danielc",
					"weight": 83.72
				},
				{
					"address": {
						"address": "1946 Oak Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -9.87059,
							"lng": -72.336845
						},
						"country": "United States",
						"postalCode": "41540",
						"state": "Massachusetts",
						"stateCode": "MA"
					},
					"age": 29,
					"bank": {
						"cardExpire": "05/29",
						"cardNumber": "2903637820228856",
						"cardType": "Visa",
						"currency": "JPY",
						"iban": "BKX6ZWB8UJZD09RFOWFPPD3C"
					},
					"birthDate": "1995-12-3",
					"bloodGroup": "AB-",
					"company": {
						"address": {
							"address": "1735 Cedar Street",
							"city": "Phoenix",
							"coordinates": {
								"lat": 72.231441,
								"lng": -158.147245
							},
							"country": "United States",
							"postalCode": "85797",
							"state": "Wyoming",
							"stateCode": "WY"
						},
						"department": "Product Management",
						"name": "Cremin Inc",
						"title": "Quality Assurance Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "229-776",
					"email": "lily.lee@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Lily",
					"gender": "female",
					"hair": {
						"color": "Purple",
						"type": "Straight"
					},
					"height": 181.42,
					"id": 28,
					"image": "https://dummyjson.com/icon/lilyb/128",
					"ip": "67.184.255.96",
					"isOldest": false,
					"lastName": "Lee",
					"macAddress": "18:b6:c7:a:50:3f",
					"maidenName": "Brown",
					"password": "lilybpass",
					"phone": "+1 808-757-9867",
					"role": "user",
					"ssn": "358-185-671",
					"university": "Johns Hopkins University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
					"username": "lilyb",
					"weight": 51.49
				},
				{
					"address": {
						"address": "1837 Maple Street",
						"city": "Indianapolis",
						"coordinates": {
							"lat": 35.498256,
							"lng": 154.088476
						},
						"country": "United States",
						"postalCode": "81783",
						"state": "Delaware",
						"stateCode": "DE"
					},
					"age": 38,
					"bank": {
						"cardExpire": "02/26",
						"cardNumber": "7262597174206766",
						"cardType": "Diners Club International",
						"currency": "SEK",
						"iban": "7N3JP8KN9AUNXOWRQGAU2JX6"
					},
					"birthDate": "1986-8-19",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1651 Lincoln Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": -59.936335,
								"lng": -12.405368
							},
							"country": "United States",
							"postalCode": "61805",
							"state": "West Virginia",
							"stateCode": "WV"
						},
						"department": "Services",
						"name": "Gerlach, Funk and Schoen",
						"title": "Sales Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "118-957",
					"email": "henry.hill@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Henry",
					"gender": "male",
					"hair": {
						"color": "Black",
						"type": "Straight"
					},
					"height": 180.25,
					"id": 29,
					"image": "https://dummyjson.com/icon/henryh/128",
					"ip": "194.43.55.202",
					"isOldest": true,
					"lastName": "Hill",
					"macAddress": "fa:c3:1b:21:5f:44",
					"maidenName": "",
					"password": "henryhpass",
					"phone": "+1 240-833-4680",
					"role": "user",
					"ssn": "925-686-100",
					"university": "University of Illinois--Urbana-Champaign",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "henryh",
					"weight": 95.84
				},
				{
					"address": {
						"address": "568 Tenth Street",
						"city": "San Francisco",
						"coordinates": {
							"lat": 20.946052,
							"lng": 100.228822
						},
						"country": "United States",
						"postalCode": "54698",
						"state": "Montana",
						"stateCode": "MT"
					},
					"age": 32,
					"bank": {
						"cardExpire": "05/28",
						"cardNumber": "3756638438861539",
						"cardType": "Carte Bancaire",
						"currency": "JPY",
						"iban": "OOPQTNZ74OLPKVT7TGB89UQL"
					},
					"birthDate": "1992-1-3",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "1173 Eighth Street",
							"city": "San Diego",
							"coordinates": {
								"lat": 65.324413,
								"lng": 87.142893
							},
							"country": "United States",
							"postalCode": "85777",
							"state": "Michigan",
							"stateCode": "MI"
						},
						"department": "Services",
						"name": "Kreiger Inc",
						"title": "Human Resources Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "415-286",
					"email": "addison.wright@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Addison",
					"gender": "female",
					"hair": {
						"color": "Blonde",
						"type": "Straight"
					},
					"height": 179.32,
					"id": 30,
					"image": "https://dummyjson.com/icon/addisonw/128",
					"ip": "11.35.69.81",
					"isOldest": true,
					"lastName": "Wright",
					"macAddress": "fb:0:94:21:16:c",
					"maidenName": "",
					"password": "addisonwpass",
					"phone": "+1 514-384-3300",
					"role": "user",
					"ssn": "804-492-390",
					"university": "Syracuse University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "addisonw",
					"weight": 76.93
				},
				{
					"address": {
						"address": "1814 Cedar Street",
						"city": "Charlotte",
						"coordinates": {
							"lat": 52.410844,
							"lng": 23.60067
						},
						"country": "United States",
						"postalCode": "21191",
						"state": "Indiana",
						"stateCode": "IN"
					},
					"age": 36,
					"bank": {
						"cardExpire": "03/27",
						"cardNumber": "3430117055178040",
						"cardType": "RuPay",
						"currency": "GBP",
						"iban": "8CWPTN20RQPDSYBIFFBKST0Y"
					},
					"birthDate": "1988-9-5",
					"bloodGroup": "B+",
					"company": {
						"address": {
							"address": "1144 Cedar Street",
							"city": "Columbus",
							"coordinates": {
								"lat": 9.880888,
								"lng": 123.403919
							},
							"country": "United States",
							"postalCode": "81421",
							"state": "Georgia",
							"stateCode": "GA"
						},
						"department": "Accounting",
						"name": "Miller, Schowalter and Wisozk",
						"title": "Technical Support Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "627-325",
					"email": "gabriel.adams@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Gabriel",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Curly"
					},
					"height": 181.72,
					"id": 31,
					"image": "https://dummyjson.com/icon/gabriela/128",
					"ip": "22.129.163.106",
					"isOldest": true,
					"lastName": "Adams",
					"macAddress": "a6:1e:22:5f:fd:49",
					"maidenName": "",
					"password": "gabrielapass",
					"phone": "+91 936-400-4116",
					"role": "user",
					"ssn": "281-870-221",
					"university": "Massachusetts Institute of Technology (MIT)",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "gabriela",
					"weight": 79.14
				},
				{
					"address": {
						"address": "356 Pine Street",
						"city": "San Jose",
						"coordinates": {
							"lat": -20.105724,
							"lng": 136.91646
						},
						"country": "United States",
						"postalCode": "31121",
						"state": "Mississippi",
						"stateCode": "MS"
					},
					"age": 28,
					"bank": {
						"cardExpire": "02/27",
						"cardNumber": "6770466105455683",
						"cardType": "UnionPay",
						"currency": "TRY",
						"iban": "OWB91F2VZ2E9CLXNOL6UWHHG"
					},
					"birthDate": "1996-7-23",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "898 Seventh Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": 60.587133,
								"lng": 14.884213
							},
							"country": "United States",
							"postalCode": "16128",
							"state": "Nebraska",
							"stateCode": "NE"
						},
						"department": "Research and Development",
						"name": "Mante LLC",
						"title": "Accountant"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "444-790",
					"email": "natalie.harris@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Natalie",
					"gender": "female",
					"hair": {
						"color": "Black",
						"type": "Wavy"
					},
					"height": 196.7,
					"id": 32,
					"image": "https://dummyjson.com/icon/natalieh/128",
					"ip": "15.75.88.81",
					"isOldest": false,
					"lastName": "Harris",
					"macAddress": "96:92:8f:92:af:fe",
					"maidenName": "",
					"password": "nataliehpass",
					"phone": "+49 584-501-9302",
					"role": "user",
					"ssn": "844-175-995",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
					"username": "natalieh",
					"weight": 57
				},
				{
					"address": {
						"address": "625 Third Street",
						"city": "Denver",
						"coordinates": {
							"lat": -63.00584,
							"lng": 76.189171
						},
						"country": "United States",
						"postalCode": "74622",
						"state": "Oregon",
						"stateCode": "OR"
					},
					"age": 31,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "9469552713257189",
						"cardType": "NPS",
						"currency": "NZD",
						"iban": "WAY3DD43Q6Q80C91JL6QMMPG"
					},
					"birthDate": "1993-4-19",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "127 Cedar Street",
							"city": "Washington",
							"coordinates": {
								"lat": 71.127142,
								"lng": 174.470146
							},
							"country": "United States",
							"postalCode": "17426",
							"state": "South Carolina",
							"stateCode": "SC"
						},
						"department": "Product Management",
						"name": "Luettgen and Sons",
						"title": "Software Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "193-203",
					"email": "carter.baker@x.dummyjson.com",
					"eyeColor": "Green",
					"firstName": "Carter",
					"gender": "male",
					"hair": {
						"color": "Brown",
						"type": "Straight"
					},
					"height": 190.96,
					"id": 33,
					"image": "https://dummyjson.com/icon/carterb/128",
					"ip": "167.111.147.45",
					"isOldest": true,
					"lastName": "Baker",
					"macAddress": "35:0:ad:91:5f:f3",
					"maidenName": "",
					"password": "carterbpass",
					"phone": "+49 787-512-9117",
					"role": "user",
					"ssn": "927-818-529",
					"university": "Washington University in St. Louis",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "carterb",
					"weight": 70.78
				},
				{
					"address": {
						"address": "21 Cedar Street",
						"city": "San Francisco",
						"coordinates": {
							"lat": -44.27707,
							"lng": -40.123604
						},
						"country": "United States",
						"postalCode": "42411",
						"state": "Oregon",
						"stateCode": "OR"
					},
					"age": 25,
					"bank": {
						"cardExpire": "04/26",
						"cardNumber": "1261953782214521",
						"cardType": "Visa",
						"currency": "INR",
						"iban": "UADPJBZ9RKH43HTQTVH3XJVU"
					},
					"birthDate": "1999-11-18",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "325 Fourth Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": 8.578595,
								"lng": -31.731083
							},
							"country": "United States",
							"postalCode": "74759",
							"state": "California",
							"stateCode": "CA"
						},
						"department": "Research and Development",
						"name": "Berge, Reinger and Oberbrunner",
						"title": "Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "738-442",
					"email": "sofia.mitchell@x.dummyjson.com",
					"eyeColor": "Red",
					"firstName": "Sofia",
					"gender": "female",
					"hair": {
						"color": "Blonde",
						"type": "Curly"
					},
					"height": 186.93,
					"id": 34,
					"image": "https://dummyjson.com/icon/sofiam/128",
					"ip": "214.76.55.140",
					"isOldest": false,
					"lastName": "Mitchell",
					"macAddress": "23:b:b2:dd:6:f",
					"maidenName": "",
					"password": "sofiampass",
					"phone": "+92 957-686-6804",
					"role": "user",
					"ssn": "522-409-302",
					"university": "University of North Carolina--Chapel Hill",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "sofiam",
					"weight": 69.14
				},
				{
					"address": {
						"address": "164 Elm Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": 52.754451,
							"lng": 32.383886
						},
						"country": "United States",
						"postalCode": "42061",
						"state": "Idaho",
						"stateCode": "ID"
					},
					"age": 29,
					"bank": {
						"cardExpire": "03/25",
						"cardNumber": "5624707322246699",
						"cardType": "Elo",
						"currency": "PKR",
						"iban": "M6XUGZUMRVYFPA749TW11FOQ"
					},
					"birthDate": "1995-9-23",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "1505 Madison Street",
							"city": "Denver",
							"coordinates": {
								"lat": 15.938706,
								"lng": 70.153019
							},
							"country": "United States",
							"postalCode": "87171",
							"state": "New Hampshire",
							"stateCode": "NH"
						},
						"department": "Legal",
						"name": "Keebler and Sons",
						"title": "Chief Information Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "195-420",
					"email": "jack.ward@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Jack",
					"gender": "male",
					"hair": {
						"color": "White",
						"type": "Kinky"
					},
					"height": 198.13,
					"id": 35,
					"image": "https://dummyjson.com/icon/jackw/128",
					"ip": "131.243.182.227",
					"isOldest": false,
					"lastName": "Ward",
					"macAddress": "33:6c:1c:b8:f5:92",
					"maidenName": "",
					"password": "jackwpass",
					"phone": "+91 857-765-4373",
					"role": "user",
					"ssn": "714-118-525",
					"university": "Pepperdine University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "jackw",
					"weight": 56.73
				},
				{
					"address": {
						"address": "1964 Fifth Street",
						"city": "Dallas",
						"coordinates": {
							"lat": -41.149882,
							"lng": -167.072873
						},
						"country": "United States",
						"postalCode": "63361",
						"state": "Utah",
						"stateCode": "UT"
					},
					"age": 33,
					"bank": {
						"cardExpire": "02/28",
						"cardNumber": "8250985716703050",
						"cardType": "BC Card",
						"currency": "JPY",
						"iban": "CVZUYWP0DE2FJV35UBX139M6"
					},
					"birthDate": "1991-1-14",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1431 Lincoln Street",
							"city": "Denver",
							"coordinates": {
								"lat": 15.465539,
								"lng": -76.452876
							},
							"country": "United States",
							"postalCode": "12416",
							"state": "Delaware",
							"stateCode": "DE"
						},
						"department": "Engineering",
						"name": "Ritchie and Sons",
						"title": "Marketing Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "474-323",
					"email": "harper.turner@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Harper",
					"gender": "female",
					"hair": {
						"color": "Red",
						"type": "Curly"
					},
					"height": 191.03,
					"id": 36,
					"image": "https://dummyjson.com/icon/harpert/128",
					"ip": "102.200.5.180",
					"isOldest": false,
					"lastName": "Turner",
					"macAddress": "3c:5f:b3:2:1c:5",
					"maidenName": "",
					"password": "harpertpass",
					"phone": "+49 980-340-5333",
					"role": "user",
					"ssn": "290-677-251",
					"university": "Boston University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "harpert",
					"weight": 70.18
				},
				{
					"address": {
						"address": "419 Elm Street",
						"city": "Seattle",
						"coordinates": {
							"lat": -59.018685,
							"lng": 82.296555
						},
						"country": "United States",
						"postalCode": "20540",
						"state": "Louisiana",
						"stateCode": "LA"
					},
					"age": 34,
					"bank": {
						"cardExpire": "04/28",
						"cardNumber": "0954541144518224",
						"cardType": "Interac",
						"currency": "SEK",
						"iban": "AJCKYA81F772Y6I2JEQLMAZC"
					},
					"birthDate": "1990-4-20",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "345 Tenth Street",
							"city": "Austin",
							"coordinates": {
								"lat": -31.021039,
								"lng": -102.785277
							},
							"country": "United States",
							"postalCode": "15423",
							"state": "North Dakota",
							"stateCode": "ND"
						},
						"department": "Engineering",
						"name": "Kihn - Thompson",
						"title": "Developer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "509-535",
					"email": "mason.parker@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Mason",
					"gender": "male",
					"hair": {
						"color": "Gray",
						"type": "Wavy"
					},
					"height": 171.56,
					"id": 37,
					"image": "https://dummyjson.com/icon/masonp/128",
					"ip": "97.184.116.71",
					"isOldest": false,
					"lastName": "Parker",
					"macAddress": "51:97:60:8b:4a:75",
					"maidenName": "",
					"password": "masonppass",
					"phone": "+61 837-389-4095",
					"role": "user",
					"ssn": "475-408-496",
					"university": "Yale University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "masonp",
					"weight": 76.25
				},
				{
					"address": {
						"address": "560 Fifth Street",
						"city": "Seattle",
						"coordinates": {
							"lat": 36.157244,
							"lng": -29.219594
						},
						"country": "United States",
						"postalCode": "70664",
						"state": "Rhode Island",
						"stateCode": "RI"
					},
					"age": 26,
					"bank": {
						"cardExpire": "01/27",
						"cardNumber": "6700474320260358",
						"cardType": "RuPay",
						"currency": "TRY",
						"iban": "7I9GEGMXL9VGE6G8R8LIU56R"
					},
					"birthDate": "1998-3-25",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "69 Ninth Street",
							"city": "Chicago",
							"coordinates": {
								"lat": -1.902962,
								"lng": 15.129767
							},
							"country": "United States",
							"postalCode": "77252",
							"state": "Ohio",
							"stateCode": "OH"
						},
						"department": "Legal",
						"name": "Sanford and Sons",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "329-619",
					"email": "aria.roberts@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Aria",
					"gender": "female",
					"hair": {
						"color": "Blue",
						"type": "Curly"
					},
					"height": 199.62,
					"id": 38,
					"image": "https://dummyjson.com/icon/ariar/128",
					"ip": "208.86.10.37",
					"isOldest": false,
					"lastName": "Roberts",
					"macAddress": "7d:16:14:f8:d5:4",
					"maidenName": "",
					"password": "ariarpass",
					"phone": "+61 411-514-5320",
					"role": "user",
					"ssn": "631-656-511",
					"university": "Princeton University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "ariar",
					"weight": 88.96
				},
				{
					"address": {
						"address": "590 Lincoln Street",
						"city": "Houston",
						"coordinates": {
							"lat": -50.975209,
							"lng": 53.492629
						},
						"country": "United States",
						"postalCode": "12506",
						"state": "Wisconsin",
						"stateCode": "WI"
					},
					"age": 30,
					"bank": {
						"cardExpire": "01/25",
						"cardNumber": "2810336175495461",
						"cardType": "JCB",
						"currency": "CNY",
						"iban": "P9XHDUDOI7KBTD5L2G3SC6QX"
					},
					"birthDate": "1994-4-6",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "99 First Street",
							"city": "Columbus",
							"coordinates": {
								"lat": -86.557025,
								"lng": -154.751446
							},
							"country": "United States",
							"postalCode": "81266",
							"state": "South Dakota",
							"stateCode": "SD"
						},
						"department": "Accounting",
						"name": "Fadel Inc",
						"title": "Chief Operating Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "883-600",
					"email": "lucas.gray@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Lucas",
					"gender": "male",
					"hair": {
						"color": "Red",
						"type": "Wavy"
					},
					"height": 195.26,
					"id": 39,
					"image": "https://dummyjson.com/icon/lucasg/128",
					"ip": "56.97.195.115",
					"isOldest": false,
					"lastName": "Gray",
					"macAddress": "39:83:8b:37:af:6e",
					"maidenName": "",
					"password": "lucasgpass",
					"phone": "+44 687-435-7119",
					"role": "user",
					"ssn": "178-343-654",
					"university": "Syracuse University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "lucasg",
					"weight": 88.5
				},
				{
					"address": {
						"address": "1420 First Street",
						"city": "Washington",
						"coordinates": {
							"lat": -20.421386,
							"lng": -125.851148
						},
						"country": "United States",
						"postalCode": "85475",
						"state": "Utah",
						"stateCode": "UT"
					},
					"age": 27,
					"bank": {
						"cardExpire": "04/28",
						"cardNumber": "0222821965561452",
						"cardType": "Visa",
						"currency": "BRL",
						"iban": "JPNKGL9N1J930H744PR6F13F"
					},
					"birthDate": "1997-6-20",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "258 Ninth Street",
							"city": "Los Angeles",
							"coordinates": {
								"lat": -83.225804,
								"lng": 127.981653
							},
							"country": "United States",
							"postalCode": "48333",
							"state": "North Carolina",
							"stateCode": "NC"
						},
						"department": "Human Resources",
						"name": "Cassin Group",
						"title": "Chief Technology Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "681-377",
					"email": "ella.adams@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Ella",
					"gender": "female",
					"hair": {
						"color": "White",
						"type": "Wavy"
					},
					"height": 167.53,
					"id": 40,
					"image": "https://dummyjson.com/icon/ellaa/128",
					"ip": "175.172.136.236",
					"isOldest": false,
					"lastName": "Adams",
					"macAddress": "fb:e6:93:1f:65:b1",
					"maidenName": "",
					"password": "ellaapass",
					"phone": "+1 450-865-6061",
					"role": "user",
					"ssn": "195-311-611",
					"university": "Northeastern University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
					"username": "ellaa",
					"weight": 64.19
				},
				{
					"address": {
						"address": "98 Tenth Street",
						"city": "San Antonio",
						"coordinates": {
							"lat": 89.781211,
							"lng": -50.810277
						},
						"country": "United States",
						"postalCode": "19937",
						"state": "North Carolina",
						"stateCode": "NC"
					},
					"age": 32,
					"bank": {
						"cardExpire": "01/29",
						"cardNumber": "9330874027500659",
						"cardType": "Interac",
						"currency": "CAD",
						"iban": "GLVVKMVFJUI5UD6AT6MOFH56"
					},
					"birthDate": "1992-6-16",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "1130 Tenth Street",
							"city": "Columbus",
							"coordinates": {
								"lat": -55.627873,
								"lng": -146.083081
							},
							"country": "United States",
							"postalCode": "62624",
							"state": "Pennsylvania",
							"stateCode": "PA"
						},
						"department": "Human Resources",
						"name": "Jacobs - Nader",
						"title": "Business Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "496-858",
					"email": "evan.reed@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Evan",
					"gender": "male",
					"hair": {
						"color": "Blonde",
						"type": "Kinky"
					},
					"height": 152.55,
					"id": 41,
					"image": "https://dummyjson.com/icon/evanr/128",
					"ip": "6.25.22.101",
					"isOldest": false,
					"lastName": "Reed",
					"macAddress": "4d:df:1b:97:83:c0",
					"maidenName": "",
					"password": "evanrpass",
					"phone": "+61 932-569-4853",
					"role": "user",
					"ssn": "197-874-889",
					"university": "University of California--Irvine",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "evanr",
					"weight": 90.4
				},
				{
					"address": {
						"address": "1999 Seventh Street",
						"city": "San Diego",
						"coordinates": {
							"lat": -59.303292,
							"lng": -87.318538
						},
						"country": "United States",
						"postalCode": "13916",
						"state": "West Virginia",
						"stateCode": "WV"
					},
					"age": 28,
					"bank": {
						"cardExpire": "01/29",
						"cardNumber": "5465476274483180",
						"cardType": "Maestro",
						"currency": "EUR",
						"iban": "PMD8YU00ONQZ6N15NUIUA664"
					},
					"birthDate": "1996-8-21",
					"bloodGroup": "B-",
					"company": {
						"address": {
							"address": "979 Tenth Street",
							"city": "San Jose",
							"coordinates": {
								"lat": -5.788002,
								"lng": 88.846665
							},
							"country": "United States",
							"postalCode": "59824",
							"state": "New York",
							"stateCode": "NY"
						},
						"department": "Support",
						"name": "Schmidt - Hyatt",
						"title": "Sales Manager"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "854-428",
					"email": "avery.carter@x.dummyjson.com",
					"eyeColor": "Blue",
					"firstName": "Avery",
					"gender": "female",
					"hair": {
						"color": "Blue",
						"type": "Straight"
					},
					"height": 179.92,
					"id": 42,
					"image": "https://dummyjson.com/icon/averyc/128",
					"ip": "187.69.252.251",
					"isOldest": false,
					"lastName": "Carter",
					"macAddress": "f0:9a:ba:d9:48:d5",
					"maidenName": "",
					"password": "averycpass",
					"phone": "+44 254-655-6112",
					"role": "user",
					"ssn": "902-510-406",
					"university": "Yale University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
					"username": "averyc",
					"weight": 59.37
				},
				{
					"address": {
						"address": "25 Sixth Street",
						"city": "San Diego",
						"coordinates": {
							"lat": 41.653453,
							"lng": 175.676203
						},
						"country": "United States",
						"postalCode": "48884",
						"state": "Delaware",
						"stateCode": "DE"
					},
					"age": 34,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "2928698223409259",
						"cardType": "Maestro",
						"currency": "TRY",
						"iban": "HBOFBLQ4I6NC3SD4UA8N2SMB"
					},
					"birthDate": "1990-11-1",
					"bloodGroup": "O+",
					"company": {
						"address": {
							"address": "1704 Madison Street",
							"city": "Chicago",
							"coordinates": {
								"lat": 80.111181,
								"lng": -125.230725
							},
							"country": "United States",
							"postalCode": "34806",
							"state": "Colorado",
							"stateCode": "CO"
						},
						"department": "Product Management",
						"name": "Kuhlman LLC",
						"title": "Technical Support Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "735-917",
					"email": "benjamin.foster@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Benjamin",
					"gender": "male",
					"hair": {
						"color": "Blue",
						"type": "Kinky"
					},
					"height": 164.2,
					"id": 43,
					"image": "https://dummyjson.com/icon/benjaminf/128",
					"ip": "132.29.94.179",
					"isOldest": false,
					"lastName": "Foster",
					"macAddress": "39:b4:48:18:5:9c",
					"maidenName": "",
					"password": "benjaminfpass",
					"phone": "+61 333-911-3476",
					"role": "user",
					"ssn": "769-766-682",
					"university": "University of Michigan--Ann Arbor",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
					"username": "benjaminf",
					"weight": 58.9
				},
				{
					"address": {
						"address": "1276 Cedar Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -58.699428,
							"lng": 143.479322
						},
						"country": "United States",
						"postalCode": "32823",
						"state": "Vermont",
						"stateCode": "VT"
					},
					"age": 26,
					"bank": {
						"cardExpire": "04/29",
						"cardNumber": "6881960720756508",
						"cardType": "Diners Club International",
						"currency": "SEK",
						"iban": "GE69DH4DIW8TTIT7JE64SAT0"
					},
					"birthDate": "1998-5-9",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1722 Fourth Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": 83.572349,
								"lng": -108.398653
							},
							"country": "United States",
							"postalCode": "53020",
							"state": "Michigan",
							"stateCode": "MI"
						},
						"department": "Legal",
						"name": "Schmeler - Spinka",
						"title": "Chief Financial Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "835-488",
					"email": "scarlett.wright@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Scarlett",
					"gender": "female",
					"hair": {
						"color": "Gray",
						"type": "Straight"
					},
					"height": 180.04,
					"id": 44,
					"image": "https://dummyjson.com/icon/scarlettw/128",
					"ip": "243.186.233.187",
					"isOldest": false,
					"lastName": "Wright",
					"macAddress": "79:c9:54:dd:af:2a",
					"maidenName": "",
					"password": "scarlettwpass",
					"phone": "+1 599-432-3048",
					"role": "user",
					"ssn": "728-544-407",
					"university": "University of Pennsylvania",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
					"username": "scarlettw",
					"weight": 70.75
				},
				{
					"address": {
						"address": "108 Adams Street",
						"city": "Columbus",
						"coordinates": {
							"lat": 59.268321,
							"lng": -30.466022
						},
						"country": "United States",
						"postalCode": "51083",
						"state": "Montana",
						"stateCode": "MT"
					},
					"age": 30,
					"bank": {
						"cardExpire": "03/26",
						"cardNumber": "2005194726432164",
						"cardType": "RuPay",
						"currency": "TRY",
						"iban": "ZS6B89ES5M9TCN41GZGOWCJT"
					},
					"birthDate": "1994-1-12",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1794 Elm Street",
							"city": "Houston",
							"coordinates": {
								"lat": 52.096422,
								"lng": 178.506028
							},
							"country": "United States",
							"postalCode": "78494",
							"state": "North Dakota",
							"stateCode": "ND"
						},
						"department": "Research and Development",
						"name": "Johnson and Sons",
						"title": "Legal Counsel"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "761-657",
					"email": "lincoln.kelly@x.dummyjson.com",
					"eyeColor": "Amber",
					"firstName": "Lincoln",
					"gender": "male",
					"hair": {
						"color": "White",
						"type": "Straight"
					},
					"height": 191.01,
					"id": 45,
					"image": "https://dummyjson.com/icon/lincolnk/128",
					"ip": "82.138.239.3",
					"isOldest": false,
					"lastName": "Kelly",
					"macAddress": "f6:3c:e7:3b:d6:40",
					"maidenName": "",
					"password": "lincolnkpass",
					"phone": "+49 680-666-9673",
					"role": "user",
					"ssn": "439-236-645",
					"university": "Yale University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
					"username": "lincolnk",
					"weight": 73.38
				},
				{
					"address": {
						"address": "666 Fourth Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": 3.84181,
							"lng": -33.501862
						},
						"country": "United States",
						"postalCode": "82463",
						"state": "West Virginia",
						"stateCode": "WV"
					},
					"age": 29,
					"bank": {
						"cardExpire": "03/27",
						"cardNumber": "4206391100396837",
						"cardType": "Interac",
						"currency": "SEK",
						"iban": "U5ETD8TPJGZXIHUBTF7XB6BI"
					},
					"birthDate": "1995-2-2",
					"bloodGroup": "AB+",
					"company": {
						"address": {
							"address": "1654 Second Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": -69.657286,
								"lng": 97.241416
							},
							"country": "United States",
							"postalCode": "84519",
							"state": "Missouri",
							"stateCode": "MO"
						},
						"department": "Engineering",
						"name": "Weber Inc",
						"title": "Technical Support Engineer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "449-504",
					"email": "hannah.robinson@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Hannah",
					"gender": "female",
					"hair": {
						"color": "Green",
						"type": "Kinky"
					},
					"height": 150.25,
					"id": 46,
					"image": "https://dummyjson.com/icon/hannahr/128",
					"ip": "82.201.57.248",
					"isOldest": true,
					"lastName": "Robinson",
					"macAddress": "d5:da:6d:bc:6d:1b",
					"maidenName": "",
					"password": "hannahrpass",
					"phone": "+92 556-625-4398",
					"role": "user",
					"ssn": "150-215-129",
					"university": "Harvard University",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15",
					"username": "hannahr",
					"weight": 67.93
				},
				{
					"address": {
						"address": "55 Madison Street",
						"city": "Chicago",
						"coordinates": {
							"lat": 2.340163,
							"lng": -34.156688
						},
						"country": "United States",
						"postalCode": "58331",
						"state": "Rhode Island",
						"stateCode": "RI"
					},
					"age": 35,
					"bank": {
						"cardExpire": "04/29",
						"cardNumber": "2176026170212775",
						"cardType": "JCB",
						"currency": "EUR",
						"iban": "H5QRESBL5GN954V0X557JYX8"
					},
					"birthDate": "1989-6-14",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1009 Third Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": -7.502715,
								"lng": -139.88832
							},
							"country": "United States",
							"postalCode": "54340",
							"state": "Maine",
							"stateCode": "ME"
						},
						"department": "Research and Development",
						"name": "Runolfsson, Kohler and Welch",
						"title": "Chief Financial Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "839-819",
					"email": "nicholas.bailey@x.dummyjson.com",
					"eyeColor": "Gray",
					"firstName": "Nicholas",
					"gender": "male",
					"hair": {
						"color": "Gray",
						"type": "Curly"
					},
					"height": 162.29,
					"id": 47,
					"image": "https://dummyjson.com/icon/nicholasb/128",
					"ip": "171.101.211.225",
					"isOldest": true,
					"lastName": "Bailey",
					"macAddress": "74:f6:24:f2:f7:6d",
					"maidenName": "",
					"password": "nicholasbpass",
					"phone": "+49 212-856-4272",
					"role": "user",
					"ssn": "956-576-764",
					"university": "Yale University",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "nicholasb",
					"weight": 50.86
				},
				{
					"address": {
						"address": "968 Elm Street",
						"city": "San Diego",
						"coordinates": {
							"lat": 81.64788,
							"lng": 179.922909
						},
						"country": "United States",
						"postalCode": "64610",
						"state": "Colorado",
						"stateCode": "CO"
					},
					"age": 27,
					"bank": {
						"cardExpire": "05/27",
						"cardNumber": "2753155771474852",
						"cardType": "Elo",
						"currency": "CNY",
						"iban": "7I5K7G5VXEDAKWG1D52TD5QA"
					},
					"birthDate": "1997-6-18",
					"bloodGroup": "O-",
					"company": {
						"address": {
							"address": "1108 Fourth Street",
							"city": "San Francisco",
							"coordinates": {
								"lat": -49.230074,
								"lng": 103.094302
							},
							"country": "United States",
							"postalCode": "63517",
							"state": "Tennessee",
							"stateCode": "TN"
						},
						"department": "Marketing",
						"name": "Moore Inc",
						"title": "Research Analyst"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "270-115",
					"email": "luna.russell@x.dummyjson.com",
					"eyeColor": "Hazel",
					"firstName": "Luna",
					"gender": "female",
					"hair": {
						"color": "White",
						"type": "Straight"
					},
					"height": 188,
					"id": 48,
					"image": "https://dummyjson.com/icon/lunar/128",
					"ip": "218.176.123.51",
					"isOldest": false,
					"lastName": "Russell",
					"macAddress": "d0:4b:7c:b2:be:9d",
					"maidenName": "",
					"password": "lunarpass",
					"phone": "+91 730-486-3735",
					"role": "user",
					"ssn": "867-546-518",
					"university": "University of Florida",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
					"username": "lunar",
					"weight": 76.37
				},
				{
					"address": {
						"address": "1419 Pine Street",
						"city": "Columbus",
						"coordinates": {
							"lat": 75.201414,
							"lng": -106.866138
						},
						"country": "United States",
						"postalCode": "61227",
						"state": "Montana",
						"stateCode": "MT"
					},
					"age": 31,
					"bank": {
						"cardExpire": "05/27",
						"cardNumber": "6854860175138599",
						"cardType": "Discover",
						"currency": "AUD",
						"iban": "EIQKTWLBDUEJKOYYOEFNTT4Y"
					},
					"birthDate": "1993-12-21",
					"bloodGroup": "A+",
					"company": {
						"address": {
							"address": "1756 Second Street",
							"city": "Chicago",
							"coordinates": {
								"lat": 34.894275,
								"lng": 74.192722
							},
							"country": "United States",
							"postalCode": "65899",
							"state": "New Hampshire",
							"stateCode": "NH"
						},
						"department": "Engineering",
						"name": "Kessler, Kozey and Simonis",
						"title": "Chief Executive Officer"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "610-768",
					"email": "jacob.cooper@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Jacob",
					"gender": "male",
					"hair": {
						"color": "Green",
						"type": "Wavy"
					},
					"height": 157.39,
					"id": 49,
					"image": "https://dummyjson.com/icon/jacobc/128",
					"ip": "145.68.5.38",
					"isOldest": false,
					"lastName": "Cooper",
					"macAddress": "fd:58:46:54:61:ac",
					"maidenName": "",
					"password": "jacobcpass",
					"phone": "+91 322-775-7582",
					"role": "user",
					"ssn": "576-853-277",
					"university": "University of California--Los Angeles (UCLA)",
					"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
					"username": "jacobc",
					"weight": 96.32
				},
				{
					"address": {
						"address": "926 Elm Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -29.825372,
							"lng": 116.639085
						},
						"country": "United States",
						"postalCode": "24463",
						"state": "New Hampshire",
						"stateCode": "NH"
					},
					"age": 33,
					"bank": {
						"cardExpire": "01/26",
						"cardNumber": "6288370557661493",
						"cardType": "RuPay International",
						"currency": "INR",
						"iban": "SH1UHKUCEMW3OCALA3C9SBR5"
					},
					"birthDate": "1991-11-6",
					"bloodGroup": "A-",
					"company": {
						"address": {
							"address": "1869 Jefferson Street",
							"city": "Indianapolis",
							"coordinates": {
								"lat": -26.748208,
								"lng": -12.086179
							},
							"country": "United States",
							"postalCode": "65401",
							"state": "Montana",
							"stateCode": "MT"
						},
						"department": "Research and Development",
						"name": "Ernser Group",
						"title": "Database Administrator"
					},
					"crypto": {
						"coin": "Bitcoin",
						"network": "Ethereum (ERC20)",
						"wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a"
					},
					"ein": "323-682",
					"email": "stella.hughes@x.dummyjson.com",
					"eyeColor": "Brown",
					"firstName": "Stella",
					"gender": "female",
					"hair": {
						"color": "Blue",
						"type": "Straight"
					},
					"height": 171.2,
					"id": 50,
					"image": "https://dummyjson.com/icon/stellah/128",
					"ip": "201.29.33.153",
					"isOldest": true,
					"lastName": "Hughes",
					"macAddress": "29:78:ea:4:44:a5",
					"maidenName": "",
					"password": "stellahpass",
					"phone": "+92 378-326-3439",
					"role": "user",
					"ssn": "970-230-310",
					"university": "University of California--San Diego",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
					"username": "stellah",
					"weight": 81.45
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
			const getUsersResponse = Database.getUsers({ limit }, {
				name: 'John',
				city: 'Phoenix'
			},{
				select: ['id','firstName','address']
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "626 Main Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -77.16213,
							"lng": -92.084824
						},
						"country": "United States",
						"postalCode": "29112",
						"state": "Mississippi",
						"stateCode": "MS"
					},
					"firstName": "Emily",
					"id": 1
				},
				{
					"address": {
						"address": "1252 Washington Street",
						"city": "Phoenix",
						"coordinates": {
							"lat": -79.040825,
							"lng": 100.576804
						},
						"country": "United States",
						"postalCode": "64002",
						"state": "Maryland",
						"stateCode": "MD"
					},
					"firstName": "Michael",
					"id": 104
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
			const getUsersResponse = Database.getUsers({ limit }, {
				name: 'Mateo',
				oldestPerCity: true
			},{
				select: ['id','firstName','address','birthDate']
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "1578 Fourth Street",
						"city": "Columbus",
						"coordinates": {
							"lat": -32.828675,
							"lng": -82.557354
						},
						"country": "United States",
						"postalCode": "20673",
						"state": "Missouri",
						"stateCode": "MO"
					},
					"birthDate": "1994-6-2",
					"firstName": "Mateo",
					"id": 24,
					"isOldest": false
				},
				{
					"address": {
						"address": "365 Washington Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 81.588332,
							"lng": 23.122562
						},
						"country": "United States",
						"postalCode": "61459",
						"state": "Connecticut",
						"stateCode": "CT"
					},
					"birthDate": "1996-8-8",
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false
				},
				{
					"address": {
						"address": "798 Ninth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 23.706655,
							"lng": -56.346259
						},
						"country": "United States",
						"postalCode": "12771",
						"state": "Texas",
						"stateCode": "TX"
					},
					"birthDate": "1979-1-26",
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true
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
			const getUsersResponse = Database.getUsers({ limit }, {
				city: 'Jacksonville',
				oldestPerCity: true
			},{
				select: ['id','firstName','address','birthDate']
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "607 Fourth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 0.505589,
							"lng": -157.43281
						},
						"country": "United States",
						"postalCode": "26593",
						"state": "Colorado",
						"stateCode": "CO"
					},
					"birthDate": "1994-6-13",
					"firstName": "Emma",
					"id": 5,
					"isOldest": false
				},
				{
					"address": {
						"address": "1627 Sixth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 24.857497,
							"lng": -34.865429
						},
						"country": "United States",
						"postalCode": "41810",
						"state": "West Virginia",
						"stateCode": "WV"
					},
					"birthDate": "2000-8-4",
					"firstName": "Mia",
					"id": 12,
					"isOldest": false
				},
				{
					"address": {
						"address": "926 Elm Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -29.825372,
							"lng": 116.639085
						},
						"country": "United States",
						"postalCode": "24463",
						"state": "New Hampshire",
						"stateCode": "NH"
					},
					"birthDate": "1991-11-6",
					"firstName": "Stella",
					"id": 50,
					"isOldest": false
				},
				{
					"address": {
						"address": "1423 Main Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -15.022759,
							"lng": 58.392572
						},
						"country": "United States",
						"postalCode": "34271",
						"state": "Idaho",
						"stateCode": "ID"
					},
					"birthDate": "1995-9-17",
					"firstName": "Eli",
					"id": 51,
					"isOldest": false
				},
				{
					"address": {
						"address": "1705 Pine Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 35.632082,
							"lng": 127.968158
						},
						"country": "United States",
						"postalCode": "39449",
						"state": "Kansas",
						"stateCode": "KS"
					},
					"birthDate": "1992-12-24",
					"firstName": "Zoe",
					"id": 70,
					"isOldest": false
				},
				{
					"address": {
						"address": "236 Lincoln Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -87.184494,
							"lng": -137.530694
						},
						"country": "United States",
						"postalCode": "56830",
						"state": "Nevada",
						"stateCode": "NV"
					},
					"birthDate": "1995-12-7",
					"firstName": "Nolan",
					"id": 71,
					"isOldest": false
				},
				{
					"address": {
						"address": "1959 Lincoln Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 39.203338,
							"lng": -68.447736
						},
						"country": "United States",
						"postalCode": "79154",
						"state": "Minnesota",
						"stateCode": "MN"
					},
					"birthDate": "1998-8-2",
					"firstName": "Lillian",
					"id": 82,
					"isOldest": false
				},
				{
					"address": {
						"address": "328 Second Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -31.165455,
							"lng": 80.818634
						},
						"country": "United States",
						"postalCode": "30822",
						"state": "Arkansas",
						"stateCode": "AR"
					},
					"birthDate": "1992-7-20",
					"firstName": "Brayden",
					"id": 89,
					"isOldest": false
				},
				{
					"address": {
						"address": "781 Jefferson Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 60.431607,
							"lng": 37.172499
						},
						"country": "United States",
						"postalCode": "34638",
						"state": "Vermont",
						"stateCode": "VT"
					},
					"birthDate": "1980-11-24",
					"firstName": "Liam",
					"id": 122,
					"isOldest": false
				},
				{
					"address": {
						"address": "1160 Eighth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -75.052492,
							"lng": -97.743046
						},
						"country": "United States",
						"postalCode": "78335",
						"state": "New Mexico",
						"stateCode": "NM"
					},
					"birthDate": "1998-11-1",
					"firstName": "Lucas",
					"id": 129,
					"isOldest": false
				},
				{
					"address": {
						"address": "1447 Main Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -63.953218,
							"lng": -179.352554
						},
						"country": "United States",
						"postalCode": "65463",
						"state": "New York",
						"stateCode": "NY"
					},
					"birthDate": "1998-6-17",
					"firstName": "Bella",
					"id": 154,
					"isOldest": false
				},
				{
					"address": {
						"address": "365 Washington Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 81.588332,
							"lng": 23.122562
						},
						"country": "United States",
						"postalCode": "61459",
						"state": "Connecticut",
						"stateCode": "CT"
					},
					"birthDate": "1996-8-8",
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false
				},
				{
					"address": {
						"address": "1497 Eighth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": -82.732098,
							"lng": -118.759483
						},
						"country": "United States",
						"postalCode": "37262",
						"state": "Maryland",
						"stateCode": "MD"
					},
					"birthDate": "1987-1-11",
					"firstName": "Xavier",
					"id": 177,
					"isOldest": false
				},
				{
					"address": {
						"address": "798 Ninth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 23.706655,
							"lng": -56.346259
						},
						"country": "United States",
						"postalCode": "12771",
						"state": "Texas",
						"stateCode": "TX"
					},
					"birthDate": "1979-1-26",
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true
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
			const getUsersResponse = Database.getUsers({ limit }, {
				name: 'Mateo',
				city: 'Jacksonville',
				oldestPerCity: true
			},{
				select: ['id','firstName','address','birthDate']
			});
			const users = getUsersResponse.users;

			const expectedUsers = [
				{
					"address": {
						"address": "365 Washington Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 81.588332,
							"lng": 23.122562
						},
						"country": "United States",
						"postalCode": "61459",
						"state": "Connecticut",
						"stateCode": "CT"
					},
					"birthDate": "1996-8-8",
					"firstName": "Mateo",
					"id": 162,
					"isOldest": false
				},
				{
					"address": {
						"address": "798 Ninth Street",
						"city": "Jacksonville",
						"coordinates": {
							"lat": 23.706655,
							"lng": -56.346259
						},
						"country": "United States",
						"postalCode": "12771",
						"state": "Texas",
						"stateCode": "TX"
					},
					"birthDate": "1979-1-26",
					"firstName": "Mateo",
					"id": 204,
					"isOldest": true
				}
			];

			then('it should return the corresponding users.', async () => {
				logger.debug(users);
				expect(users).toEqual(expectedUsers);
			});
		});
	});

});
