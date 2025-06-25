import TableListItem from './Item';
import './index.css';
import Hooks from '../../../hooks';
import { CSSProperties, useRef } from 'react';
import Label from '../../Label';

interface Item {
	values: string[];
	isOldest?: boolean;
}

export interface TableListProps {
	items: Item[];
	onScrollEnd: () => void;
	isLoading?: boolean;
}

const TableList = (props: TableListProps) => {
	const { items, onScrollEnd, isLoading } = props;

	const tableListReference = useRef<HTMLDivElement>(null);
	Hooks.useScrollEnd(tableListReference, {
		onScrollEnd: () => {
			onScrollEnd();
		},
		offset: 1
	});

	if(items.length === 0){

		return <tbody className='tableList'>
			<tr><Label text='NO DATA FOUND'/></tr>
		</tbody>;
	}


	return (
		<tbody className='tableList' ref={tableListReference}>
			{items.map((item) => {

				const itemSelectedStyle: CSSProperties = {
					background: item?.isOldest ? '#AFD7FB' : 'white',
				};

				return <tr style={itemSelectedStyle}>
					<TableListItem item={item} isOldest={item.isOldest} />
				</tr>;
			})}

		</tbody>
	);
};

export default TableList;