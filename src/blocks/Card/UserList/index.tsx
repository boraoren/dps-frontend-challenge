import Card from '../../../components/Card';
import type { FilterProps } from '../../Filter';
import TableContainer from '../../Table/Container';
import FilterContainer from '../../Filter/Container';

interface Filter {
	key: string;
	value: string;
}

export interface CardUserListProps {
	filterProps: FilterProps;
	table: {
		selectedFields: string[],
		initialLimit?: number,
		filter?: Filter,
	};
}

const CardUserList = (props: CardUserListProps) => {

	const { filterProps, table } = props;

	return (
		<Card>
			<FilterContainer {...filterProps} />
			<TableContainer selectedFields={table.selectedFields} initialLimit={table.initialLimit}
				filter={table.filter} />
		</Card>
	);
};

export default CardUserList;