import TableHeader from '../../components/Table/Header';
import TableList from '../../components/Table/List';
import './index.css';

interface TableListItem {
	values: string[];
	isOldest?: boolean;
}

export interface TableProps {
	tableHeaders: string[],
	tableListItems: TableListItem[],
	onScrollEnd: () => void;
}

const Table = (props: TableProps) => {

	const { tableHeaders, tableListItems, onScrollEnd } = props;
	return (
		<table className="table">
			<TableHeader headers={tableHeaders} />
			<TableList items={tableListItems} onScrollEnd={onScrollEnd} />
		</table>
	);
};

export default Table;