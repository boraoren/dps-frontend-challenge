import type { Meta, StoryObj } from '@storybook/react';
import CardList from './index.tsx';
import SelectOption from '../../../components/Search/Select/index.option.ts';
import Services from '../../../services';
import { action } from '@storybook/addon-actions';


const meta = {
	title: 'DPS/Blocks/Card/List',
	component: CardList,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

const getCitiesForSelectOptions = async (): Promise<SelectOption[]> => {
	const limitMax = await Services.user.getLimitMax();
	const users = await Services.user.getList(limitMax);
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
			<CardList filterProps={{
				name: {...args.filterProps.name, onChange: action('name changed')},
				checkboxHighlightOldestPerCity: {...args.filterProps.checkboxHighlightOldestPerCity,onChange: action('isChecked')},
				searchCity: {...args.filterProps.searchCity, onChange: action('city changed')}
			}} tableProps={args.tableProps}/>
		);
	},
	args: {
		filterProps: {
			name: {
				title: 'Name',
				titleBold: true
			},
			searchCity: {
				title: 'City',
				placeHolder: 'Select City',
				selectOptions: await getCitiesForSelectOptions(),
				titleBold: true
			},
			checkboxHighlightOldestPerCity: {
				labelText:'Highlight oldest per city',
			}
		},
		tableProps: {
			tableHeaders: ['Name', 'City', 'Birthday'],
			tableListItems: [{
				values: ['Alotta Fudge', 'New York', '1.3.1995']
			},
			{
				values: ['Stan Still', 'Dallas', '31.10.1952']
			}]
		}
	}

};




