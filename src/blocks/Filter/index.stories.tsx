import type { Meta, StoryObj } from '@storybook/react';
import Filter from './index.tsx';
import { action } from '@storybook/addon-actions';
import Features from '../../features';
import { fn } from '@storybook/test';

const meta = {
	title: 'DPS/Blocks/Filter',
	component: Filter,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Filter name={{ ...args.name, onChange: action('name changed') }} checkbox={{
				...args.checkbox,
				onChange: action('checked')
			}} select={{ ...args.select, onChange: action('select changed') }} />
		);
	},
	args: {
		name: {
			title: 'Name',
			titleBold: true
		},
		select: {
			title: 'City',
			titleBold: true,
			placeHolder: 'Select City',
			options: await Features.filters.city.getCities()
		},
		checkbox: {
			title: 'Highlight oldest per city'
		}
	}
};



