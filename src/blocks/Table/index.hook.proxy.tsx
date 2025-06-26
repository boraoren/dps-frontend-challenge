import { useCallback, useEffect, useState } from 'react';
import Features from '../../features';
import Utilities from '../../utilities';

const logger = Utilities.logger.getHooks('/Blocks/Table');

interface TableListItem {
	values: string[];
	to: string;
}


interface Concat {
	values: string[];
	to: string;
}

interface Options {
	select: string[];
	concat?: Concat[]
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

const useTableForProxy = (pagination: Pagination, options: Options, filters?: Filters) => {
	const [_filters, _setFilters] = useState<Filters | undefined>(filters);

	const [table, setTable] = useState<Table>({
		tableHeaders: options.select,
		tableListItems: [],
		pagination: { limit: pagination.limit, skip: pagination.skip }
	});

	useEffect(()=> {
		//setUserList(pagination, true);
	},[pagination.limit]);

	useEffect(() => {
		setUserList(pagination, true);
	}, [_filters]);

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
		async ({skip =0, limit = 10}:Pagination, reset:boolean) => {
			setIsLoading(true);
			try {
				const _pagination: Pagination = {
					limit,
					skip
				};
				const result = await Features.users.getTableByProxy(
					_pagination,
					options,
					_filters);

				//TODO fix type
				setTable((prev) => ({
					...prev,
					tableHeaders: result.tableHeaders,
					tableListItems: reset ? result.tableListItems : [...prev.tableListItems, ...result.tableListItems],
					pagination: {
						...result.pagination,
						skip,
						limit: reset ? limit : prev.pagination.limit
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



	const handleTableOnScrollEnd = async () => {
		const limit = table.pagination.limit;
		const skip = table.pagination.skip;
		//TODO fix type
		const nextSkip = skip + limit;
		await setUserList({skip: nextSkip, limit }, false);
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

export default useTableForProxy;