import SelectOption from './index.option.ts';
import './index.css';

interface SearchSelectProps {
	selectOptions: SelectOption[];
}

const SearchSelect = (props: SearchSelectProps) => {

	const { selectOptions } = props;

	return (
		<select className="select-field">
			{selectOptions.map((option)=>{
				const {value, text, selected, disabled} = option;
				return <option value={value} disabled={disabled} selected={selected}>{text}</option>;
			})}
		</select>
	);
};

export default SearchSelect;