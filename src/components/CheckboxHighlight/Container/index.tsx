import { ReactNode } from 'react';
import './index.css';


interface CheckboxHighlightContainerProps {
	children: ReactNode;
}

const CheckboxHighlightContainer = (props: CheckboxHighlightContainerProps) => {

	const { children } = props;
	return <div className='checkboxHighlightContainer'>{children}</div>;

};

export default CheckboxHighlightContainer;