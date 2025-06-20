import type { Meta, StoryObj } from '@storybook/react';
import TableListItem from './index.tsx';

const meta = {
	title: 'DPS/Components/TableListItem',
	component: TableListItem,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof TableListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const item = {
	values: ['Alotta Fudge', 'New York', '1.3.1995' ],
};

export const Default: Story = {
	args: {
		item
	}
};

export const Selected: Story = {
	args: {
		item: {...item, selected: true}
	}
};





