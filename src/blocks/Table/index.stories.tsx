import type { Meta, StoryObj } from '@storybook/react';
import Table from './index.tsx';
import Features from '../../features';
import { useEffect, useState } from 'react';

interface TableListItem {
	values: string[];
	highlighted?: boolean;
}

interface TableData {
	tableHeaders: string[];
	tableListItems: TableListItem[];
}

const meta = {
	title: 'DPS/Blocks/Table',
	component: Table,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	//TODO fix type
	args: {
		tableHeaders: ['Name', 'City', 'Birthday'],
		tableListItems: [
			{ values: ['Alotta Fudge', 'New York', '1.3.1995'] },
			{ values: ['Stan Still', 'Dallas', '31.10.1952'] }
		]
	}
};

export const Selected: Story = {
	//TODO fix type
	args: {
		tableHeaders: ['Name', 'City', 'Birthday'],
		tableListItems: [
			{ values: ['Alotta Fudge', 'New York', '1.3.1995'] },
			{ values: ['Stan Still', 'Dallas', '31.10.1952'], highlighted: true }
		]
	}
};

export const Live: StoryObj = {
	render: (args) => {
		const selectedFields = ['id', 'firstName', 'lastName', 'birthDate', 'address.city'];

		const [tableData, setTableData] = useState<TableData>({
			tableHeaders: [],
			tableListItems: []
		});

		const [pagination, setPagination] = useState({ limitMax: 10, skip: 0 });
		const [loading, setLoading] = useState<boolean>(false);

		const fetchData = async () => {

			setLoading(true);

			const { limitMax, skip } = pagination;
			//TODO fix type
			const usersTable = Features.users.getTable(selectedFields, limitMax, skip);
			const table = await usersTable();

			setTableData((prev) => ({
				//TODO fix type
				tableHeaders: table.tableHeaders,
				//TODO fix type
				tableListItems: prev.tableListItems.concat(table.tableListItems)
			}));

			setPagination((prev) => ({
				...prev,
				skip: prev.skip + prev.limitMax
			}));

			setLoading(false);
		};


		useEffect(() => {
			fetchData();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<>
				{loading && <div style={{
					backgroundColor: 'rgba(100, 108, 255, 0.8)',
					zIndex: 999,
					position: 'absolute',
					width: '100%',
					height: '100%',
					left: 0,
					top: 0
				}} />}
				<Table
					{...args}
					tableHeaders={tableData.tableHeaders}
					tableListItems={tableData.tableListItems}
					onScrollEnd={fetchData}
				/>
			</>

		);
	}
};
