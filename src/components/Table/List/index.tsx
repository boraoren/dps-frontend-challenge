import TableListItem from './Item';
import './index.css';

interface Item {
	values: string[];
	selected?: boolean;
}

export interface TableListProps{
	items: Item[];
}

const TableList = (props: TableListProps) => {

	const {items} = props;
	return(
		<div className='tableList'>
			{items.map((item)=>{
				return <TableListItem item={item}/>;
			})}
		</div>
	);
};

export default TableList;