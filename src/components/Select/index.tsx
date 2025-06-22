import Label from '../Label';
import SelectContainer from './Container';
import SelectItem from './Item';
import SelectOption from './Item/index.option.ts';

export interface SelectProps {
	title: string;
	titleBold?: boolean;
	onChange: (selected: string) => void;
	placeHolder: string;
	selectOptions: SelectOption[];
}

const Select = (props: SelectProps) => {

	const { title, titleBold, selectOptions,placeHolder, onChange } = props;

	return (
		<SelectContainer>
			<Label text={title} bold={titleBold}/>
			<SelectItem selectOptions={selectOptions} onChange={onChange} placeHolder={placeHolder} />
		</SelectContainer>
	);
};

export default Select;