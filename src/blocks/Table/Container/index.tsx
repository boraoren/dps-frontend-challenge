import { ReactNode } from 'react';
import './index.css';

interface TableContainerProps {
	children: ReactNode;
}

const TableContainer = (props: TableContainerProps) => {
	const { children } = props;
	return (<div className='tableContainer'>{children}</div>);
};

export default TableContainer;