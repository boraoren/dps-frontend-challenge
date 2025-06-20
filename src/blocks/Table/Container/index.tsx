import { ReactNode } from 'react';

interface TableContainerProps {
	children: ReactNode;
}

const TableContainer = (props: TableContainerProps) => {
	const { children } = props;
	return (<div>{children}</div>);
};

export default TableContainer;