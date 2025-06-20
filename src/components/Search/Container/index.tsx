import { ReactNode } from 'react';
import './index.css';

interface SearchContainerProps {
	children: ReactNode;
}

const SearchContainer = (props: SearchContainerProps) => {
	const { children } = props;
	return (<div className='searchContainer'>{children}</div>);
};

export default SearchContainer;