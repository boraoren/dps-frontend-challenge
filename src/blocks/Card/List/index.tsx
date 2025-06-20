import Card from '../../../components/Card';
import Filter from '../../Filter';
import Table from '../../Table';

import type { FilterProps } from '../../Filter';
import type { TableProps } from '../../Table';

interface CardListProps {
	filterProps: FilterProps;
	tableProps: TableProps;
}

const CardList = (props: CardListProps) => {

	const { filterProps, tableProps } = props;

	return (
		<Card>
			<Filter {...filterProps} />
			<Table {...tableProps} />
		</Card>
	);
};

export default CardList;