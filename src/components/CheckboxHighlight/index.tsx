import Checkbox from '../Checkbox';
import CheckboxHighlightContainer from './Container';
import Label from '../Label';

export interface CheckboxHighlightProps{
	title: string;
	checked?: boolean;
	onChange: (checked: boolean) => void;
}

const CheckboxHighlight = (props: CheckboxHighlightProps) => {

	const {title, checked, onChange} = props;

	return (
		<CheckboxHighlightContainer>
			<Label text={title}/>
			<Checkbox checked={checked} onChange={onChange}/>
		</CheckboxHighlightContainer>
	);
};

export default CheckboxHighlight;