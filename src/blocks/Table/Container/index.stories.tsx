import type { Meta, StoryObj } from '@storybook/react';
import TableContainer from './index.tsx';

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

export const Integration: Story = {
	args: {
		selectedFields: ['id', 'firstName', 'lastName', 'birthDate', 'address.city'],
	}
};
