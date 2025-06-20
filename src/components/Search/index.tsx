import Label from '../Label';
import SearchContainer from './Container';
import './index.css';
import SearchSelect from './Select';
import SelectOption from './Select/index.option.ts';

interface SearchProps {
	title: string;
	onChange: (value: string) => void;
	placeHolder: string;
	selectOptions: SelectOption[];
}

const Search = (props: SearchProps) => {

	const { title, selectOptions } = props;

	return (
		<SearchContainer>
			<Label text={title} />
			<SearchSelect selectOptions={selectOptions}/>
		</SearchContainer>
	);
};

export default Search;