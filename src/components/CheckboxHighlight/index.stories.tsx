import type { Meta, StoryObj } from '@storybook/react';
import CheckboxHighlight from './index.tsx';
import { fn } from '@storybook/test';

const meta = {
	title: 'DPS/Components/CheckboxHighlight',
	component: CheckboxHighlight,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {
		onChange: fn()
	}
} satisfies Meta<typeof CheckboxHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Highlight oldest per city'
	}
};


export const Checked: Story = {
	args: {
		title: 'Highlight oldest per city',
		checked: true
	}
};






