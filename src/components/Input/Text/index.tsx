import { ChangeEvent } from 'react';
import InputType from '../index.type.ts';

interface InputTextProps {
	className: string;
	placeHolder?: string;
	onChange: (value: string) => void;
}

const InputText = (props: InputTextProps) => {

	const { className, placeHolder, onChange } = props;

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input name='inputText' type={InputType.TEXT} className={className}  onChange={handleOnChange} placeholder={placeHolder}/>
	);
};

export default InputText;