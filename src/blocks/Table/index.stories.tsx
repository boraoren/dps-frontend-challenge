import type { Meta, StoryObj } from '@storybook/react';
import TableContainer from './index.tsx';
import Features from '../../features';

const meta = {
	title: 'DPS/Blocks/Table',
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

const limit = 208;
const selectedFields = ['id', 'firstName', 'email'];
//TODO fix type
const usersTable = Features.users.getTable(selectedFields, limit);
const table = await usersTable();

export const Default: Story = {
	args: {
		tableHeaders: table.tableHeaders,
		tableListItems: table.tableListItems,
		onScrollEnd: () => {
		}
	}
};
