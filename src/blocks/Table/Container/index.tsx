import Table from '../index.tsx';
import { useTableData } from './index.hooks.ts';
import filter from '../../Filter';
import { useEffect, useState } from 'react';


interface Filter {
	key: string;
	value: string;
}

export interface TableContainerProps {
	selectedFields: string[];
	initialLimit?: number;
	filter?: Filter;
}



const TableContainer = (props: TableContainerProps) => {
	const { selectedFields, initialLimit, filter } = props;


	const { tableData, onScrollEnd, isLoading } = useTableData({
		selectedFields,
		initialLimit,
		filter,
		pagination:{
			limit: 10,
			skip: 0,
			total:0
		}
	});


	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{/*JSON.stringify(tableData.pagination)*/}
			<Table
				tableHeaders={tableData.tableHeaders}
				tableListItems={tableData.tableListItems}
				onScrollEnd={onScrollEnd} />
			{isLoading ? <div>Loading...</div> : <div>Not Loading...</div>}
		</div>
	);
};

export default TableContainer;