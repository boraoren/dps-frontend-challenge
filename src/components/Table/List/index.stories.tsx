import type { Meta, StoryObj } from '@storybook/react';
import TableList from './index.tsx';

const meta = {
	title: 'DPS/Components/TableList',
	component: TableList,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof TableList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
	args: {
		items: [{
			values: ['Alotta Fudge', 'New York', '1.3.1995' ],
		},{
			values: ['Stan Still', 'Dallas', '31.10.1952' ],
		}]
	}
};



export const Highlighted: Story = {
	args: {
		items: [{
			values: ['Alotta Fudge', 'New York', '1.3.1995' ],
		},{
			values: ['Stan Still', 'Dallas', '31.10.1952' ],
			isOldest: true
		}]
	}
};




