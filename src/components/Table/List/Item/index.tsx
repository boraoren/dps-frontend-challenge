import Label from '../../../Label';
import './index.css';
import { CSSProperties } from 'react';

interface Item {
	values: string[];
	selected?: boolean;
}

interface TableListItemProps {
	item: Item;
}

const TableListItem = (props: TableListItemProps) => {

	const { item } = props;

	const itemSelectedStyle: CSSProperties = {
		background: item.selected ? '#AFD7FB' : 'white',
		borderRadius: 50
	};

	return (
		<tr className="tableListItem" style={itemSelectedStyle}>
			{item.values.map((value) => {
				return <td><Label text={value} /></td>;
			})}
		</tr>
	);
};

export default TableListItem;