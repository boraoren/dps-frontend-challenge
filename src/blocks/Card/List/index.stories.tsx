import type { Meta, StoryObj } from '@storybook/react';
import CardList from './index.tsx';
import { action } from '@storybook/addon-actions';
import Features from '../../../features';


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

export const Default: Story = {
	render: (args) => {
		return (
			<CardList filterProps={{
				name: {...args.filterProps.name, onChange: action('name changed')},
				checkboxHighlightOldestPerCity: {...args.filterProps.checkboxHighlightOldestPerCity,onChange: action('isChecked')},
				selectCity: {...args.filterProps.selectCity, onChange: action('city changed')}
			}} tableProps={args.tableProps}/>
		);
	},
	args: {
		filterProps: {
			//TODO fix type
			name: {
				title: 'Name',
				titleBold: true
			},
			//TODO fix type
			selectCity: {
				title: 'City',
				placeHolder: 'Select City',
				selectOptions: await Features.filters.city.getCities(),
				titleBold: true
			},
			//TODO fix type
			checkboxHighlightOldestPerCity: {
				labelText:'Highlight oldest per city',
			}
		},
		//TODO fix type
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


export const Integration: Story = {
	render: (args) => {
		return (
			<CardList filterProps={{
				name: {...args.filterProps.name, onChange: action('name changed')},
				checkboxHighlightOldestPerCity: {...args.filterProps.checkboxHighlightOldestPerCity,onChange: action('isChecked')},
				selectCity: {...args.filterProps.selectCity, onChange: action('city changed')}
			}} tableProps={args.tableProps}/>
		);
	},
	args: {
		filterProps: {
			name: {
				title: 'Name',
				titleBold: true
			},
			selectCity: {
				title: 'City',
				placeHolder: 'Select City',
				selectOptions: await Features.filters.city.getCities(),
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





