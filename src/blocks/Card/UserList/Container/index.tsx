import CardUserList from '../index.tsx';
import { InputProps } from '../../../../components/Input';
import { SelectProps } from '../../../../components/Select';
import { CheckboxProps } from '../../../../components/Checkbox';
import useTableForProxy from '../../../Table/index.hook.proxy.tsx';

interface Filter {
	name: InputProps;
	select: SelectProps;
	checkbox: CheckboxProps;
}

interface Pagination {
	limit: number;
	skip?: number;
	total?: number;
}

export interface TableListItem {
	values: string[];
	highlighted?: boolean;
}


interface Concat {
	values: string[];
	to: string;
}

interface Options {
	select: string[];
	concat?: Concat[];
}


interface CardUserListContainer {
	filter: Filter;
	options: Options;
	pagination: Pagination;
}

const CardUserListContainer = (props: CardUserListContainer) => {
	const { filter, options, pagination } = props;

	const {
		table,
		handleSelectOnChange,
		handleTableOnScrollEnd,
		isLoading,
		handleCheckboxOnChange,
		handleNameOnChange
	} = useTableForProxy(
		pagination,
		options
	);

	return (
		<>
			<CardUserList filter={{
				name: {
					title: filter.name.title,
					titleBold: filter.name.titleBold,
					onChange: handleNameOnChange,
					delay: filter.name.delay,
				},
				checkbox: {
					title: filter.checkbox.title,
					onChange: handleCheckboxOnChange
				},
				select: {
					title: filter.select.title,
					titleBold: filter.select.titleBold,
					options: filter.select.options,
					onChange: handleSelectOnChange,
					placeHolder: filter.select.placeHolder
				}
			}} table={table} tableOnScrollEnd={handleTableOnScrollEnd} />
			{isLoading ? <div>LOADING...</div> : <div>.</div>}
		</>
	);
};

export default CardUserListContainer;