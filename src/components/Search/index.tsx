import Label from '../Label';
import SearchContainer from './Container';
import './index.css';
import SearchSelect from './Select';
import SelectOption from './Select/index.option.ts';

export interface SearchProps {
	title: string;
	titleBold?: boolean;
	onChange: (selected: string) => void;
	placeHolder: string;
	selectOptions: SelectOption[];
}

const Search = (props: SearchProps) => {

	const { title, titleBold, selectOptions,placeHolder, onChange } = props;

	return (
		<SearchContainer>
			<Label text={title} bold={titleBold}/>
			<SearchSelect selectOptions={selectOptions} onChange={onChange} placeHolder={placeHolder} />
		</SearchContainer>
	);
};

export default Search;