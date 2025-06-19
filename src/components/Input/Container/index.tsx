import { ReactNode } from 'react';
import './index.css';

interface InputContainer {
	children: ReactNode;
}

const InputContainer = (props: InputContainer) => {
	const { children } = props;
	return (<div className='inputContainer'>{children}</div>);
};

export default InputContainer;