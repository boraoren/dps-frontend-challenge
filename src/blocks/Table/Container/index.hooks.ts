import { useEffect, useState, useCallback } from 'react';
import Features from '../../../features';
import Utilities from '../../../utilities';

const logger = Utilities.logger.getBlocks();
const LOGGER_PATH = '/table/container/hook';

export interface TableListItem {
	values: string[];
	highlighted?: boolean;
}

export interface TableData {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

interface UserTableDataProps {
	selectedFields: string[];
	initialLimit?: number;
	filter?: Filter;
	pagination: Pagination;
}


interface Filter {
	key: string;
	value: string;
}

interface Pagination {
	limit: number;
	skip: number;
	total: number;
}

export function useTableData({ selectedFields, initialLimit = 10, filter, pagination }: UserTableDataProps) {

	const [userGetTableState, setUserGetTableState] = useState<TableData>({
		tableHeaders: [],
		tableListItems: [],
		pagination
	});

	logger.debug(LOGGER_PATH, {
		selectedFields,
		initialLimit
	});

	const [isLoading, setIsLoading] = useState(false);


	const fetchData = useCallback(async ({ skip = 0, reset = false }: { skip?: number; reset?: boolean }) => {
		setIsLoading(true);

		const { limit } = userGetTableState.pagination;

		const usersGetTable = Features.users.getTable({
			selectedFields,
			filter,
			limit,
			skip
		});

		const { tableHeaders, tableListItems, pagination } = await usersGetTable();

		logger.debug(LOGGER_PATH, tableListItems);

		setUserGetTableState(prevState => ({
			...prevState,
			tableHeaders,
			tableListItems: reset ? tableListItems : prevState.tableListItems.concat(tableListItems),
			pagination: {
				...pagination,
				skip,
				limit: reset ? 10 : prevState.pagination.limit
			}
		}));

		setIsLoading(false);
	}, [selectedFields, filter, userGetTableState.pagination.limit]);



	useEffect(() => {
		fetchData({ skip: 0, reset: true });
	}, [filter?.value]);

	const onScrollEnd = useCallback(() => {
		if (isLoading) return;

		const nextSkip = userGetTableState.pagination.skip + userGetTableState.pagination.limit;
		fetchData({ skip: nextSkip, reset: false });
	}, [isLoading, userGetTableState.pagination, fetchData]);


	return {
		tableData: userGetTableState,
		isLoading,
		onScrollEnd,
		pagination
	};
}
