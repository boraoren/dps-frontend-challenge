import './index.css';

interface LabelProps {
	text: string;
}

const Label = (props: LabelProps) => {
	const { text } = props;
	return (
		<span className='label'>{text}</span>
	);

};

export default Label;