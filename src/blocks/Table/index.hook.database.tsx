import { useState, useEffect, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import Features from '../../features';
import Utilities from '../../utilities';

const logger = Utilities.logger.getHooks('/Blocks/Table');

interface TableListItem {
	values: string[];
}


interface Options {
	select: string[];
}

interface Filters {
	name?: string;
	city?: string;
	oldestPerCity?: boolean;
}

interface Pagination {
	limit: number;
	skip?: number;
}


interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

const useTableForDatabase = (pagination: Pagination, options: Options, filters?: Filters) => {
	const [_filters, _setFilters] = useState<Filters | undefined>(filters);
	const [table, setTable] = useState<Table>({
		tableHeaders: options.select,
		tableListItems: [],
		pagination: { limit: pagination.limit, skip: pagination.skip }
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSelectOnChange = (selected: string) => {
		_setFilters((prevState) => {
			if (!prevState) {
				return {
					city: selected
				};
			}
			return {
				...prevState, city: selected
			};
		});
	};

	const handleCheckboxOnChange = (isChecked: boolean) => {
		_setFilters((prevState) => {
			if (!prevState) {
				return {
					oldestPerCity: isChecked
				};
			}

			return {
				...prevState,
				oldestPerCity: isChecked
			};
		});
	};

	const handleNameOnChange = (value: string) => {
		_setFilters((prevState) => {
			if (!prevState) {
				return {
					name: value,
				};
			}

			return {
				...prevState,
				name: value
			};
		});
	};


	const setUserList = useCallback(
		async (skip: number, reset: boolean) => {
			setIsLoading(true);
			try {
				const _pagination: Pagination = {
					limit: pagination.limit,
					skip
				};
				const result = Features.users.getTableByDatabase(
					_pagination,
					options,
					_filters);


				setTable((prev) => ({
					...prev,
					tableHeaders: options.select,
					tableListItems: reset ? result.tableListItems : [...prev.tableListItems, ...result.tableListItems],
					pagination: {
						...result.pagination,
						skip,
						limit: reset ? pagination.limit : prev.pagination.limit
					}
				}));

				logger.debug(result);
			} catch (error) {
				logger.error('Failed to fetch user table data', error);
			} finally {
				setIsLoading(false);
			}
		},
		[_filters]
	);

	useEffect(() => {
		setUserList(0, true);
	}, [_filters]);

	const handleTableOnScrollEnd = async () => {
		const nextSkip = table.pagination.skip + table.pagination.limit;
		await setUserList(nextSkip, false);
	};

	return {
		table,
		isLoading,
		handleSelectOnChange,
		handleTableOnScrollEnd,
		handleCheckboxOnChange,
		handleNameOnChange,
	};
};

export default useTableForDatabase;