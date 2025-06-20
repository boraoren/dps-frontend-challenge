import './index.css';
import Label from '../../Label';

export interface TableHeaderProps {
	headers: string[];
}

const TableHeader = (props: TableHeaderProps) => {

	const { headers } = props;

	return (
		<div className="tableHeader">
			{headers.map((header) => {
				return <Label text={header} bold/>;
			})}
		</div>
	);
};

export default TableHeader;