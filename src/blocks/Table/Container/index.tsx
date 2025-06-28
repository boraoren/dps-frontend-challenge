import Table from '../index.tsx';

export interface TableListItem {
	values: string[];
	isOldest?: boolean;
}

interface Pagination {
	limit: number;
	skip: number;
	total?: number;
}

interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

interface TableContainerProps{
	table: Table;
	tableOnScrollEnd: () => void;
}

const TableContainer = (props: TableContainerProps) => {
	const { table, tableOnScrollEnd } = props;

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Table
				tableHeaders={table.tableHeaders}
				tableListItems={table.tableListItems}
				onScrollEnd={tableOnScrollEnd}/>
		</div>
	);
};

export default TableContainer;