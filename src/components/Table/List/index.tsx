import TableListItem from './Item';
import './index.css';
import Hooks from '../../../hooks';
import { useRef } from 'react';

interface Item {
	values: string[];
	isOldest?: boolean;
}

export interface TableListProps {
	items: Item[];
	onScrollEnd: ()=>void;
	isLoading?: boolean;
}

const TableList = (props: TableListProps) => {
	const { items,onScrollEnd, isLoading } = props;

	const tableListReference = useRef<HTMLDivElement>(null);
	Hooks.useScrollEnd(tableListReference, {
		onScrollEnd: () => {
			onScrollEnd();
		},
		offset: 1
	});

	return (
		<div className="tableList" ref={tableListReference}>
			{items.map((item) => {
				return   <TableListItem item={item} isOldest={item.isOldest}/>;
			})}
		</div>
	);
};

export default TableList;