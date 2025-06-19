import styles from './index.module.css';
import InputText from './Text';
import InputType from './index.type.ts';
import InputPassword from './Password';
import Label from '../Label';
import InputContainer from './Container';

interface InputProps {
	type?: InputType;
	title: string;
	onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
	const { type, title, onChange } = props;

	switch (type) {
	case InputType.PASSWORD:
		return <InputContainer>
			<Label text={title} />
			<InputPassword className={styles.input} onChange={onChange} />
		</InputContainer>;
	default:
		return <InputContainer>
			<Label text={title} />
			<InputText className={styles.input} onChange={onChange} />
		</InputContainer>;
	}

};

export default Input;