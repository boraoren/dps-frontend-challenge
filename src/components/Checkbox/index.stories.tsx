import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index.tsx';

const meta = {
	title: 'DPS/Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
	}
};


export const Checked: Story = {
	args: {
		checked: true
	}
};






