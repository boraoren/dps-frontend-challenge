import { useEffect, useState, useCallback } from 'react';
import Features from '../../../features';

export interface TableListItem {
	values: string[];
	highlighted?: boolean;
}

export interface TableData {
	tableHeaders: string[];
	tableListItems: TableListItem[];
}

interface UseTableDataProps {
	selectedFields: string[];
	initialLimit?: number;
}

export function useTableData({ selectedFields, initialLimit = 10 }: UseTableDataProps) {
	const [tableData, setTableData] = useState<TableData>({
		tableHeaders: [],
		tableListItems: [],
	});

	const [pagination, setPagination] = useState({ limitMax: initialLimit, skip: 0 });
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		const { limitMax, skip } = pagination;
		//TODO fix type
		const usersTable = Features.users.getTable(selectedFields, limitMax, skip);
		const table = await usersTable();

		//TODO fix type
		setTableData((prev) => ({
			tableHeaders: table.tableHeaders,
			tableListItems: prev.tableListItems.concat(table.tableListItems),
		}));

		setPagination((prev) => ({
			...prev,
			skip: prev.skip + prev.limitMax,
		}));

		setIsLoading(false);
	}, [pagination, selectedFields]);

	useEffect(() => {
		fetchData();
	}, []);

	return {
		tableData,
		isLoading,
		fetchData,
	};
}
