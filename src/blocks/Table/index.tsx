import TableHeader from '../../components/Table/Header';
import TableList from '../../components/Table/List';
import TableContainer from './Container';

interface TableListItem {
	values: string[];
	highlighted?: boolean;
}

export interface TableProps {
	tableHeaders: string[],
	tableListItems: TableListItem[],
	onScrollEnd: () => void;
}

const Table = (props: TableProps) => {

	const { tableHeaders, tableListItems, onScrollEnd } = props;
	return (
		<TableContainer>
			<div style={{marginBottom: -2}}>
				<TableHeader headers={tableHeaders} />
			</div>
			<TableList items={tableListItems} onScrollEnd={onScrollEnd}/>
		</TableContainer>
	);
};

export default Table;