import type { Meta, StoryObj } from '@storybook/react';
import CardUserList from './index.tsx';
import { action } from '@storybook/addon-actions';
import Features from '../../../features';


const meta = {
	title: 'DPS/Blocks/Card/UserList',
	component: CardUserList,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof CardUserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<CardUserList {...args} filter={{
				name: args.filter.name,
				checkbox: args.filter.checkbox,
				select: args.filter.select
			}} />
		);
	},
	args: {
		//TODO fix type
		filter: {
			name: {
				title: 'Name',
				titleBold: true
			},
			select: {
				title: 'City',
				placeHolder: 'Select City',
				options: await Features.filters.city.getCities(),
				titleBold: true
			},
			checkbox: {
				title:'Highlight oldest per city',
			}
		},
		table: {
			selectedFields: ['id','firstName','email','birthDate'],
			initialLimit: 10,
		},
	}

};


export const Integration: Story = {
	render: (args) => {
		return (
			<CardUserList {...args} filter={{
				name: {...args.filter.name, onChange: action('name changed')},
				checkbox: {...args.filter.checkbox,onChange: action('isChecked')},
				select: {...args.filter.select, onChange: action('city changed')}
			}} />
		);
	},
	args: {
		table: {
			selectedFields: ['id','firstName','birthDate', 'address.city'],
			initialLimit: 10,
		},
		filter: {
			name: {
				title: 'Name',
				titleBold: true,
			},
			select: {
				title: 'City',
				placeHolder: 'Select City',
				options: await Features.filters.city.getCities(),
				titleBold: true,
			},
			checkbox: {
				title:'Highlight oldest per city',
			}
		},
	}

};





