import type { Meta, StoryObj } from '@storybook/react';
import Filter from './index.tsx';
import { action } from '@storybook/addon-actions';
import SelectOption from '../../components/Search/Select/index.option.ts';
import Services from '../../services';

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

const getCitiesForSelectOptions = async (): Promise<SelectOption[]> => {
	const limitMax = await Services.user.getLimitMax();
	const selectFields = ['firstName', 'lastName', 'birthDate', 'address'];
	const users = await Services.user.getList(selectFields,limitMax);
	const cities = Services.city.getList(users);
	const citiesSorted = Services.city.sortList(cities);
	return citiesSorted.map((city) => {
		return {
			text: city,
			value: city
		} as SelectOption;
	});
};

export const Default: Story = {
	render: (args) => {
		return (
			<Filter name={{...args.name, onChange: action('name changed')}} checkboxHighlightOldestPerCity={{...args.checkboxHighlightOldestPerCity, onChange: action('checked')}} searchCity={{...args.searchCity, onChange: action('city changed')}}/>
		);
	},
	args: {
		name: {
			title: 'Name',
			titleBold: true
		},
		searchCity: {
			title: 'City',
			titleBold: true,
			placeHolder: 'Select City',
			selectOptions: await getCitiesForSelectOptions()

		},
		checkboxHighlightOldestPerCity: {
			labelText:'Highlight oldest per city',
		}
	}
};



