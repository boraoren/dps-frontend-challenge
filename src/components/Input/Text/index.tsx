import { ChangeEvent } from 'react';
import InputType from '../index.type.ts';

interface InputTextProps {
	className: string;
	onChange: (value: string) => void;
}

const InputText = (props: InputTextProps) => {

	const { className, onChange } = props;

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input name='inputText' type={InputType.TEXT} className={className}  onChange={handleOnChange}/>
	);
};

export default InputText;