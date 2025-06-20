import styles from './index.module.css';
import InputText from './Text';
import InputType from './index.type.ts';
import InputPassword from './Password';
import Label from '../Label';
import InputContainer from './Container';

export interface InputProps {
	type?: InputType;
	title: string;
	titleBold?: boolean;
	onChange: (value: string) => void;
	placeHolder?: string;
}

const Input = (props: InputProps) => {
	const { type, title, titleBold, onChange, placeHolder } = props;

	switch (type) {
	case InputType.PASSWORD:
		return <InputContainer>
			<Label text={title} bold={titleBold}/>
			<InputPassword className={styles.input} onChange={onChange} />
		</InputContainer>;
	default:
		return <InputContainer>
			<Label text={title} bold={titleBold}/>
			<InputText className={styles.input} onChange={onChange} placeHolder={placeHolder}/>
		</InputContainer>;
	}

};

export default Input;