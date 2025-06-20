import type { Meta, StoryObj } from '@storybook/react';
import Input from './index.tsx';
import InputType from './index.type.ts';
import { fn } from '@storybook/test';

const meta = {
	title: 'DPS/Components/Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: { title: 'Title', onChange: fn() }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		type: InputType.TEXT,
	}
};

export const TextTitleBold: Story = {
	args: {
		type: InputType.TEXT,
		titleBold: true
	}
};


export const Password: Story = {
	args: {
		type: InputType.PASSWORD,
	}
};



