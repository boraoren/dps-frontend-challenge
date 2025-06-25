import Label from '../../../Label';
import './index.css';

interface Item {
	values: string[];
	isOldest?: boolean;
}

export interface TableListItemProps {
	item: Item;
}

const TableListItem = (props: TableListItemProps) => {

	const { item } = props;

	return (item.values.map((value) => {
		return <td className='tableListItem'>
			<Label text={value} />
		</td>;
	}));
};

export default TableListItem;