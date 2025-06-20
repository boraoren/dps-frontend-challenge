import './index.css';

interface CheckboxProps{
	checked?: boolean;
}

const Checkbox = (props: CheckboxProps) => {

	const {checked} = props;

	return (
		<label className="custom-checkbox">
			<input id='checkbox' type="checkbox" checked={checked}/>
			<span className="checkmark"></span>
		</label>
	);
};

export default Checkbox;