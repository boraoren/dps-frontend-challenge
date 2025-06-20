import './index.css';
import { CSSProperties } from 'react';

interface LabelProps {
	text: string;
	bold?: boolean;
}

const Label = (props: LabelProps) => {
	const { text, bold } = props;
	const style: CSSProperties = {
		fontWeight: bold ? 'bold' : 'normal'
	};

	return (
		<span className="label" style={style}>{text}</span>
	);

};

export default Label;