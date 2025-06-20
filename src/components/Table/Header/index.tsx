import './index.css';

interface TableHeader {
	headers: string[];
}

const TableHeader = (props: TableHeader) => {

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