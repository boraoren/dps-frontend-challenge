import './index.css';

export interface TableHeaderProps {
	headers: string[];
}

const TableHeader = (props: TableHeaderProps) => {

	const { headers } = props;

	return (
		<tr className="tableHeader">
			{headers.map((header) => {
				return <th>{header}</th>;
			})}
		</tr>
	);
};

export default TableHeader;