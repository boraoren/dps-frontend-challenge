import Label from '../../../Label';
import './index.css';
import { CSSProperties } from 'react';

interface Item {
	values: string[];
	highlighted?: boolean;
}

export interface TableListItemProps {
	item: Item;
}

const TableListItem = (props: TableListItemProps) => {

	const { item } = props;

	const itemSelectedStyle: CSSProperties = {
		background: item?.highlighted ? '#AFD7FB' : 'white',
		borderRadius: 10,
		padding: 5
	};

	return (
		<div className="tableListItem" style={itemSelectedStyle}>
			{item.values.map((value) => {
				return <div><Label text={value} /></div>;
			})}
		</div>
	);
};

export default TableListItem;