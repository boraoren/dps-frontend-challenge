import './index.css';
import { ChangeEvent } from 'react';

interface CheckboxProps {
	checked?: boolean;
	onChange: (checked: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {

	const { checked, onChange } = props;

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	return (
		<label className="custom-checkbox">
			<input id="checkbox" type="checkbox" checked={checked} onChange={handleOnChange} />
			<span className="checkmark"></span>
		</label>
	);
};

export default Checkbox;