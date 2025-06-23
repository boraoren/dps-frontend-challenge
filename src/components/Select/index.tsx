import Label from '../Label';
import SelectContainer from './Container';
import SelectItem from './Item';
import SelectOption from './Item/index.option.ts';
import Utilities from '../../utilities';

export interface SelectProps {
	title: string;
	titleBold?: boolean;
	onChange: (selected: string) => void;
	placeHolder: string;
	options: SelectOption[];
}

const logger = Utilities.logger.getComponentLogger();
const LOGGER_PATH = '/Select';

const Select = (props: SelectProps) => {

	const { title, titleBold, onChange, placeHolder, options } = props;

	const handleOnChange = (selected: string) => {
		logger.debug(LOGGER_PATH, {selected});
		onChange(selected);
	};

	return (
		<SelectContainer>
			<Label text={title} bold={titleBold} />
			<SelectItem selectOptions={options} onChange={handleOnChange} placeHolder={placeHolder} />
		</SelectContainer>
	);
};

export default Select;