import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FilterContainer from './index.tsx';

const meta = {
	title: 'DPS/Blocks/Filter/Container',
	component: FilterContainer,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof FilterContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<FilterContainer name={{ ...args.name, onChange: action('name changed') }} checkbox={{
				...args.checkbox,
				onChange: action('checked')
			}} select={{
				...args.select, onChange: action('city changed')
			}} />
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
		},
		checkbox: {
			title: 'Highlight oldest per city'
		},
	}
};



