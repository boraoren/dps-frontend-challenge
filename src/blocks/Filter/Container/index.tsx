import './index.css';
import Filter from '../index.tsx';
import { InputProps } from '../../../components/Input';
import { useEffect, useState } from 'react';
import Features from '../../../features';
import { CheckboxProps } from '../../../components/Checkbox';
import { SelectProps } from '../../../components/Select';

interface FilterContainerProps {
	name: InputProps;
	select: SelectProps;
	checkbox: CheckboxProps;
}

const FilterContainer = (props: FilterContainerProps) => {
	const { name, select, checkbox } = props;
	const [filterSelect, setFilterSelect] = useState<SelectProps>({
		title: select.title,
		titleBold: select.titleBold,
		onChange: select.onChange,
		options: [],
		placeHolder: select.placeHolder
	});

	useEffect(() => {
		const fetchCities = async () => {
			const result = await Features.filters.city.getCities();
			setFilterSelect((prevState)=> {
				return{
					...prevState,
					options: result
				};
			});
		};
		fetchCities();
	}, []);


	if (!filterSelect.options) return <div>Loading...</div>;

	return (
		<div className="filterContainer">
			<Filter
				name={name}
				select={filterSelect}
				checkbox={checkbox}
			/>
		</div>
	);
};


export default FilterContainer;