import type { Meta, StoryObj } from '@storybook/react';
import CardUserList from './index.tsx';
import CardUserListContainer from './index.tsx';
import { action } from '@storybook/addon-actions';
import { useTable } from '../../../Table/index.hook.tsx';

const meta = {
	title: 'DPS/Blocks/Card/UserList/Container',
	component: CardUserList,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof CardUserList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

interface Filter {
	key: string;
	value: string;
}

export const Integration: Story = {
	render: (args) => {
		const { table, handleSelectOnChange, handleTableOnScrollEnd, isLoading } = useTable();
		return (
			<>
				<CardUserListContainer filter={{
					name: { ...args.filter.name, onChange: action('name changed') },
					checkbox: { ...args.filter.checkbox, onChange: action('highlight oldest checked') },
					select: { ...args.filter.select, onChange: handleSelectOnChange }
				}} table={table} tableOnScrollEnd={handleTableOnScrollEnd} />
				{isLoading ? <div>LOADING...</div> : <div>.</div>}
			</>
		);
	},
	args: {
		table: {
			selectedFields: ['id', 'firstName', 'birthDate', 'address.city'],
			initialLimit: 10
		},
		filter: {
			name: {
				title: 'Name',
				titleBold: true
			},
			select: {
				title: 'City',
				placeHolder: 'Select City',
				titleBold: true
			},
			checkbox: {
				title: 'Highlight oldest per city'
			}
		}
	}

};





