import './index.css';
import Label from '../../Label';
import Utilities from '../../../utilities';

export interface TableHeaderProps {
	headers: string[];
}

const TableHeader = (props: TableHeaderProps) => {

	const { headers } = props;

	return (
		<div className="tableHeader">
			{headers.map((header) => {
				return <Label text={Utilities.string.toReadableText(header)} bold />;
			})}
		</div>
	);
};

export default TableHeader;