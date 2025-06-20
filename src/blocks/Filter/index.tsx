import FilterContainer from './Container';
import Input, { InputProps } from '../../components/Input';
import Search, { SearchProps } from '../../components/Search';
import CheckboxHighlight, { CheckboxHighlightProps } from '../../components/CheckboxHighlight';

interface FilterProps {
	name: InputProps;
	searchCity: SearchProps;
	checkboxHighlightOldestPerCity: CheckboxHighlightProps;
}

const Filter = (props: FilterProps) => {

	const { name, searchCity, checkboxHighlightOldestPerCity } = props;

	return (
		<FilterContainer>
			<Input title={name.title} onChange={name.onChange} />
			<Search selectOptions={searchCity.selectOptions} onChange={searchCity.onChange}
				placeHolder={searchCity.placeHolder} title={searchCity.title} />
			<CheckboxHighlight labelText={checkboxHighlightOldestPerCity.labelText} onChange={checkboxHighlightOldestPerCity.onChange}/>
		</FilterContainer>
	);
};

export default Filter;