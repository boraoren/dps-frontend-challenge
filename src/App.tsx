import dpsLogo from './assets/DPS.svg';
import './App.css';
import FilterContainer from './blocks/Filter/Container';
import { InputProps } from './components/Input';
import { SelectProps } from './components/Select';
import { CheckboxProps } from './components/Checkbox';

function App() {


	const filter = {
		name: {
			title: 'Name',
			titleBold: true,
			onChange: () => {},
		} as InputProps,
		select: {
			title: 'City',
			titleBold: true,
			placeHolder: 'Select City',
			onChange: () => {},
			options: []
		} as SelectProps,
		checkbox: {
			title: 'Highlight oldest per city',
			onChange: () => {}
		} as CheckboxProps,
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
				<FilterContainer name={filter.name} select={filter.select} checkbox={filter.checkbox}/>
			</div>
		</>
	);
}

export default App;
