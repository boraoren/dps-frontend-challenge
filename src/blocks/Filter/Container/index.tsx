import { ReactNode } from 'react';
import './index.css';

interface FilterContainerProps {
	children: ReactNode;
}

const FilterContainer = (props: FilterContainerProps) => {
	const { children } = props;
	return (<div className='filterContainer'>{children}</div>);
};

export default FilterContainer;