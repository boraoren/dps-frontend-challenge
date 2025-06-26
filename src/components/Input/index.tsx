import styles from './index.module.css';
import InputText from './Text';
import InputType from './index.type.ts';
import InputPassword from './Password';
import Label from '../Label';
import InputContainer from './Container';
import { useEffect, useState } from 'react';

export interface InputProps {
	type?: InputType;
	title: string;
	titleBold?: boolean;
	onChange: (value: string) => void;
	placeHolder?: string;
	delay?: number;
}

const Input = (props: InputProps) => {
	const { type, title, titleBold, onChange, placeHolder, delay = 1000 } = props;
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		const handler = setTimeout(() => {
			onChange(inputValue);
		}, delay);

		return () => clearTimeout(handler);
	}, [inputValue]);

	const handleOnchange = (value:string) => {
		setInputValue(value);
	};

	switch (type) {
	case InputType.PASSWORD:
		return <InputContainer>
			<Label text={title} bold={titleBold}/>
			<InputPassword className={styles.input} onChange={onChange} />
		</InputContainer>;
	default:
		return <InputContainer>
			<Label text={title} bold={titleBold}/>
			<InputText className={styles.input} onChange={handleOnchange} placeHolder={placeHolder}/>
		</InputContainer>;
	}

};

export default Input;