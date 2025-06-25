import Label from '../../../Label';
import { CSSProperties } from 'react';

interface Item {
	values: string[];
	isOldest?: boolean;
}

export interface TableListItemProps {
	item: Item;
}

const TableListItem = (props: TableListItemProps) => {

	const { item } = props;

	const itemSelectedStyle: CSSProperties = {
		background: item?.isOldest ? '#AFD7FB' : 'white',
		borderRadius: 10,
		padding: 5,
		width: 200,
		textAlign: 'center'
	};

	return (item.values.map((value) => {
		return <td style={itemSelectedStyle}>
			<Label text={value} />
		</td>;
	}));
};

export default TableListItem;