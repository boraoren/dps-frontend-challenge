import CardUserList, { CardUserListProps } from '../index.tsx';
import { useEffect } from 'react';
import Features from '../../../../features';
import { InputProps } from '../../../../components/Input';
import { SelectProps } from '../../../../components/Select';
import { CheckboxProps } from '../../../../components/Checkbox';

interface Filter {
	name: InputProps;
	select: SelectProps;
	checkbox: CheckboxProps;
}

interface Pagination {
	limit: number;
	skip: number;
	total: number;
}

export interface TableListItem {
	values: string[];
	highlighted?: boolean;
}


interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

interface CardUserListProps {
	filter: Filter;
	table: Table;
	tableOnScrollEnd: () => void;
}


const CardUserListContainer = (props: CardUserListProps) => {
	const { table, filter, tableOnScrollEnd } = props;

	useEffect(() => {
		const fetchCities = async () => {
			filter.select.options = await Features.filters.city.getCities();
		};
		fetchCities();
	}, []);

	return (
		<CardUserList filter={filter} table={table} tableOnScrollEnd={tableOnScrollEnd} />
	);
};

export default CardUserListContainer;