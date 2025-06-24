import Card from '../../../components/Card';
import type { FilterProps } from '../../Filter';
import TableContainer from '../../Table/Container';
import FilterContainer from '../../Filter/Container';

export interface TableListItem {
	values: string[];
	isOldest?: boolean;
}

interface Pagination {
	limit: number;
	skip: number;
	total: number;
}

interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
	oldestPerCity: boolean;
}


export interface CardUserListProps {
	filter: FilterProps;
	table: Table;
	tableOnScrollEnd: () => void;
}

const CardUserList = (props: CardUserListProps) => {

	const { filter, table, tableOnScrollEnd } = props;

	return (
		<Card>
			<FilterContainer {...filter} />
			<TableContainer table={table} tableOnScrollEnd={tableOnScrollEnd} />
		</Card>
	);
};

export default CardUserList;