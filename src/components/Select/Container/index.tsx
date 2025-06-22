import { ReactNode } from 'react';
import './index.css';

interface SelectContainerProps {
	children: ReactNode;
}

const SelectContainer = (props: SelectContainerProps) => {
	const { children } = props;
	return (<div className='selectContainer'>{children}</div>);
};

export default SelectContainer;