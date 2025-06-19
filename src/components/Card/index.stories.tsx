import type { Meta, StoryObj } from '@storybook/react';
import Card from './index.tsx';

const meta = {
	title: 'DPS/Card',
	component: Card,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: { children: { table: { disable: true } }},
	args: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};




