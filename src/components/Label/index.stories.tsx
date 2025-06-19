import type { Meta, StoryObj } from '@storybook/react';
import Label from './index.tsx';

const meta = {
	title: 'DPS/Components/Label',
	component: Label,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'Label'
	}
};




