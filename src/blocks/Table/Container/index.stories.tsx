import type { Meta, StoryObj } from '@storybook/react';
import TableContainer from './index.tsx';
import Features from '../../../features';
import { useState } from 'react';

export interface TableListItem {
	values: string[];
	isOldest?: boolean;
}

interface Pagination {
	limit: number;
	skip: number;
	total?: number;
}

interface Table {
	tableHeaders: string[];
	tableListItems: TableListItem[];
	pagination: Pagination;
}

const meta = {
	title: 'DPS/Blocks/Table/Container',
	component: TableContainer,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof TableContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const getTable = async (pagination: Pagination) => {

	const { limit, skip } = pagination;
	const getTable = Features.users.getTable({
		limit,
		skip,
		selectedFields: ['id', 'firstName', 'lastName', 'birthDate', 'address.city']
	});

	return await getTable() as Table;
};


export const Integration: Story = {

	render: (args) => {

		const [table, setTable] = useState<Table>(args.table);

		const handleTableOnScrollEnd = async () => {

			const nextSkip = table.pagination.skip + table.pagination.limit;
			const getTableResult = await getTable({
				skip: nextSkip,
				limit: table.pagination.limit
			});

			setTable((prevState) => {
				return {
					...prevState,
					tableListItems: prevState.tableListItems.concat(getTableResult.tableListItems),
					pagination: {
						...prevState.pagination,
						skip: nextSkip
					}
				};
			});
		};

		if (!table) {
			return <div>Loading...</div>;
		}

		return (
			<TableContainer table={table} tableOnScrollEnd={handleTableOnScrollEnd} />
		);
	},
	args: {
		table: await getTable({
			skip: 0,
			limit: 15,
		}) as Table,
		tableOnScrollEnd: () => {
		}
	}
};
