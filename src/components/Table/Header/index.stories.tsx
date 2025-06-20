import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './index.tsx';

const meta = {
	title: 'DPS/Components/TableHeader',
	component: TableHeader,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		headers:['name','city','birthday']
	}
};




