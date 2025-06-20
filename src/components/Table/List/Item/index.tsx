import Label from '../../../Label';
import './index.css';
import { CSSProperties } from 'react';

interface TableListItem {
	values: string[];
	selected?: boolean;
}

interface TableListItemProps {
	items: TableListItem[];
}

const TableListItem = (props: TableListItemProps) => {

	const { items } = props;

	return (
		<tr className="tableListItem">
			{items.map((item) => {

				const itemSelectedStyle: CSSProperties = {
					background: item.selected ? '#AFD7FB' : 'white',
					borderRadius: 50,
				};

				const tds = item.values.map((value) => {
					return <td><Label text={value} /></td>;
				});

				return <tr style={itemSelectedStyle}>{tds}</tr>;
			})}
		</tr>
	);
};

export default TableListItem;