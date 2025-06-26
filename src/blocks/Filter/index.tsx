import Input, { InputProps } from '../../components/Input';
import Select, { SelectProps } from '../../components/Select';
import './index.css';
import Checkbox, { CheckboxProps } from '../../components/Checkbox';

export interface FilterProps {
	name: InputProps;
	select: SelectProps;
	checkbox: CheckboxProps;
}

const Filter = (props: FilterProps) => {

	const { name, select, checkbox } = props;

	return (
		<div className="filter">
			<Input title={name.title} titleBold={name.titleBold} onChange={name.onChange} delay={name.delay}/>
			<Select title={select.title} titleBold={select.titleBold} placeHolder={select.placeHolder}
				options={select.options} onChange={select.onChange} />
			<Checkbox title={checkbox.title} onChange={checkbox.onChange} />
		</div>
	);
};

export default Filter;