import type { Meta, StoryObj } from '@storybook/react';
import Table from './index.tsx';

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
	args: {
		tableHeaders: ['Name', 'City', 'Birthday'],
		tableListItems: [{
			values: ['Alotta Fudge', 'New York', '1.3.1995']
		},
		{
			values: ['Stan Still', 'Dallas', '31.10.1952']
		}]
	}
};

export const Selected: Story = {
	args: {
		tableHeaders: ['Name', 'City', 'Birthday'],
		tableListItems: [{
			values: ['Alotta Fudge', 'New York', '1.3.1995']
		},
		{
			values: ['Stan Still', 'Dallas', '31.10.1952'],
			selected: true
		}]
	}
};


