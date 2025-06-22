import TableHeader from '../../components/Table/Header';
import TableList from '../../components/Table/List';
import TableContainer from './Container';

interface TableListItem {
	values: string[];
	selected?: boolean;
}

export interface TableProps {
	tableHeaders: string[],
	tableListItems: TableListItem[],
}

const Table = (props: TableProps) => {

	const { tableHeaders, tableListItems } = props;
	return (
		<TableContainer>
			<div style={{marginBottom: -2}}>
				<TableHeader headers={tableHeaders} />
			</div>
			<TableList items={tableListItems} />
		</TableContainer>
	);
};

export default Table;