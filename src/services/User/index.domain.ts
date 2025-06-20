interface UserAddressCoordinates{
	lat: number;
	lng: number;
}

interface UserAddress{
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: UserAddressCoordinates;
	country: string;
}

interface UserDomain{
	id: number;
	firstName: string;
	lastName: string;
	birthDate: string; //format is yyyy-M-d
	address: UserAddress;
}

export default UserDomain;