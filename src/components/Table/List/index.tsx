import TableListItem from './Item';

interface Item {
	values: string[];
	selected?: boolean;
}

interface TableListProps{
	items: Item[];
}

const TableList = (props: TableListProps) => {

	const {items} = props;
	return(
		items.map((item)=>{
			return <TableListItem item={item}/>;
		})
	);
};

export default TableList;