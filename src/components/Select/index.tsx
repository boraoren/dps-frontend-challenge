import Label from '../Label';
import SelectContainer from './Container';
import SelectItem from './Item';
import SelectOption from './Item/index.option.ts';

export interface SelectProps {
	title: string;
	titleBold?: boolean;
	onChange: (selected: string) => void;
	placeHolder: string;
	options: SelectOption[];
}

const Select = (props: SelectProps) => {

	const { title, titleBold, onChange, placeHolder, options } = props;

	return (
		<SelectContainer>
			<Label text={title} bold={titleBold} />
			<SelectItem selectOptions={options} onChange={onChange} placeHolder={placeHolder} />
		</SelectContainer>
	);
};

export default Select;