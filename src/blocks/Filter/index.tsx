import FilterContainer from './Container';
import Input, { InputProps } from '../../components/Input';
import Select, { SelectProps } from '../../components/Select';
import CheckboxHighlight, { CheckboxHighlightProps } from '../../components/CheckboxHighlight';

export interface FilterProps {
	name: InputProps;
	selectCity: SelectProps;
	checkboxHighlightOldestPerCity: CheckboxHighlightProps;
}

const Filter = (props: FilterProps) => {

	const { name, selectCity, checkboxHighlightOldestPerCity } = props;

	return (
		<FilterContainer>
			<Input title={name.title} titleBold={name.titleBold} onChange={name.onChange} />
			<Select selectOptions={selectCity.selectOptions} onChange={selectCity.onChange}
					placeHolder={selectCity.placeHolder} title={selectCity.title} titleBold={selectCity.titleBold}/>
			<CheckboxHighlight labelText={checkboxHighlightOldestPerCity.labelText} onChange={checkboxHighlightOldestPerCity.onChange}/>
		</FilterContainer>
	);
};

export default Filter;