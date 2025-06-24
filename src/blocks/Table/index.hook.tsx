import { useState, useEffect, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import Features from '../../features';
import Utilities from '../../utilities';

const logger = Utilities.logger.getHooks('/Blocks/Table');

interface Filter {
	key: string;
	value: string;
}

interface TableListItem {
	values: string[];
}

interface Pagination {
	limit: number;
	skip: number;
	total: number;
}

interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

export function useTable(initialFields: string[] = ['id', 'firstName', 'address.city'], initialLimit = 10) {
	const [filter, setFilter] = useState<Filter | undefined>();
	const [table, setTable] = useState<Table>({
		tableHeaders: initialFields,
		tableListItems: [],
		pagination: { limit: initialLimit, skip: 0, total: 0 }
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSelectOnChange = (selected: string) => {
		setFilter({ key: 'address.city', value: selected });
		action('city changed')(selected);
	};

	const setUserList = useCallback(
		async (skip: number, reset: boolean) => {
			setIsLoading(true);
			try {
				const getTable = Features.users.getTable({
					selectedFields: initialFields,
					filter,
					limit: table.pagination.limit,
					skip
				});
				const result = await getTable();

				setTable((prev) => ({
					...prev,
					tableHeaders: result.tableHeaders,
					tableListItems: reset ? result.tableListItems : [...prev.tableListItems, ...result.tableListItems],
					pagination: {
						...result.pagination,
						skip,
						limit: reset ? initialLimit : prev.pagination.limit
					}
				}));

				logger.debug(result);
			} catch (error) {
				logger.error( 'Failed to fetch user table data', error);
			} finally {
				setIsLoading(false);
			}
		},
		[filter]
	);

	useEffect(() => {
		setUserList(0, true);
	}, [filter]);

	const handleTableOnScrollEnd = async () => {
		const nextSkip = table.pagination.skip + table.pagination.limit;
		await setUserList(nextSkip, false);
	};

	return {
		table,
		isLoading,
		handleSelectOnChange,
		handleTableOnScrollEnd
	};
}