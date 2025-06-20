import SelectOption from './index.option.ts';
import './index.css';

interface SearchSelectProps {
	selectOptions: SelectOption[];
	placeHolder: string;
	onChange: (selected: string) => void;
}

const SearchSelect = (props: SearchSelectProps) => {

	const { selectOptions, placeHolder, onChange } = props;

	const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value);
	};

	return (
		<select id="searchSelect" onChange={handleOnChange}>
			<option value={placeHolder} disabled selected>{placeHolder}</option>
			{selectOptions.map((option) => {
				const { value, text, selected, disabled } = option;
				return <option value={value} disabled={disabled} selected={selected}>{text}</option>;
			})}
		</select>
	);
};

export default SearchSelect;