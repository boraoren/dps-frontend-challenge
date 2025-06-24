import dpsLogo from './assets/DPS.svg';
import './App.css';
import CardUserListContainer from './blocks/Card/UserList/Container';
import { useState } from 'react';


interface Filter {
	key: string;
	value: string;
}


function App() {
	const [filter, setFilter] = useState<Filter | undefined>();
	const handleSelectOnChange = (selected: string) => {
		setFilter({ key: 'address.city', value: selected });
	};

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				<p>Your solution goes here 😊</p>
				<CardUserListContainer filterProps={{
					name: {
						title: 'Name',
						titleBold: true
					},
					select: {
						title: 'City',
						placeHolder: 'Select City',
						titleBold: true,
						onChange: handleSelectOnChange
					},
					checkbox: {
						title: 'Highlight oldest per city'
					}
				}} table={{
					selectedFields: ['id', 'firstName', 'birthDate', 'address.city'],
					initialLimit: 10,
					filter
				}} />
			</div>
		</>
	);
}

export default App;
