import './index.css';
import { ChangeEvent, CSSProperties } from 'react';
import Label from '../Label';

export interface CheckboxProps {
	title?: string | undefined;
	checked?: boolean;
	onChange: (checked: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {

	const { title, checked, onChange } = props;

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	const withTitle = () => {
		if (title) return <Label text={'Highlight oldest per city'} />;
		return null;
	};

	const withTitleStyle: CSSProperties = {
		display: 'flex',
		flexDirection: 'row',
		textAlign: 'right',
		width: 150,
		gap: 5
	};

	return (
		<label style={title ? withTitleStyle : undefined}>
			{withTitle()}
			<div className="custom-checkbox">
				<input id="checkbox" type="checkbox" checked={checked} onChange={handleOnChange} />
				<span className="checkmark"></span>
			</div>
		</label>
	);
};

export default Checkbox;