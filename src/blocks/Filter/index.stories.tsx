import type { Meta, StoryObj } from '@storybook/react';
import Filter from './index.tsx';
import { action } from '@storybook/addon-actions';
import SelectOption from '../../components/Select/Item/index.option.ts';
import Features from '../../features';

const meta = {
	title: 'DPS/Blocks/Filter',
	component: Filter,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
	},
	args: {}
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Filter name={{...args.name, onChange: action('name changed')}} checkboxHighlightOldestPerCity={{...args.checkboxHighlightOldestPerCity, onChange: action('checked')}} selectCity={{...args.selectCity, onChange: action('city changed')}}/>
		);
	},
	args: {
		name: {
			title: 'Name',
			titleBold: true
		},
		selectCity: {
			title: 'City',
			titleBold: true,
			placeHolder: 'Select City',
			selectOptions: await Features.filters.city.getCities()

		},
		checkboxHighlightOldestPerCity: {
			labelText:'Highlight oldest per city',
		}
	}
};



