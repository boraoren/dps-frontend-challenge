import Table from '../index.tsx';
import { useTableData } from './index.hooks.ts';

interface TableContainerProps {
	selectedFields: string[];
	initialLimit?: number;
}

const TableContainer = (props: TableContainerProps) => {
	const { selectedFields, initialLimit } = props;
	const { tableData, fetchData,  isLoading} = useTableData({
		selectedFields,
		initialLimit
	});

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Table
				tableHeaders={tableData.tableHeaders}
				tableListItems={tableData.tableListItems}
				onScrollEnd={fetchData} />
			{isLoading ? <div>Loading...</div> : <div>Not Loading...</div>}
		</div>
	);
};

export default TableContainer;