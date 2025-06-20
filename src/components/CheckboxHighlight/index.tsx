import Checkbox from '../Checkbox';
import CheckboxHighlightContainer from './Container';
import Label from '../Label';

interface CheckboxHighlightProps{
	labelText: string;
	checked?: boolean;
	onChange: (checked: boolean) => void;
}

const CheckboxHighlight = (props: CheckboxHighlightProps) => {

	const {labelText, checked, onChange} = props;

	return (
		<CheckboxHighlightContainer>
			<Label text={labelText}/>
			<Checkbox checked={checked} onChange={onChange}/>
		</CheckboxHighlightContainer>
	);
};

export default CheckboxHighlight;