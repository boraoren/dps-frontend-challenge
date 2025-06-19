import { ChangeEvent } from 'react';
import InputType from '../index.type.ts';

interface InputPasswordProps {
	className: string;
	onChange: (value: string) => void;
}

const InputPassword = (props: InputPasswordProps) => {

	const { className, onChange } = props;

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input name="inputPassword" type={InputType.PASSWORD} className={className} onChange={handleOnChange} />
	);
};

export default InputPassword;