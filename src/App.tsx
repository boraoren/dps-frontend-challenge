import dpsLogo from './assets/DPS.svg';
import './App.css';
import CardUserListContainer from './blocks/Card/UserList/Container';

function App() {
	const props=  {
		filter: {
			name: {
				title: 'Name',
				titleBold: true,
			},
			select: {
				title: 'City',
				titleBold: true,
				placeHolder: 'Select City',
			},

			checkbox: {
				title: 'Highlight oldest per city',
			},
		},
		options: {
			select: [
				'id',
				'name',
				'firstName',
				'lastName',
				'address.city',
				'birthDate',
			],

			concat: [
				{
					values: ['firstName', 'lastName'],
					to: 'name',
				},
				{
					values: ['birthDate'],
					to: 'Birthday',
				},

			],
		},
		pagination: {
			limit: 15,
			skip: 0,
		},
	};

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				{/* TODO fix type */}
				<CardUserListContainer pagination={props.pagination}
					options={props.options}
					filter={props.filter}/>
			</div>
		</>
	);
}

export default App;
