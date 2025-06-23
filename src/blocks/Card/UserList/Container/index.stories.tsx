import type { Meta, StoryObj } from '@storybook/react';
import CardUserList from './index.tsx';
import CardUserListContainer from './index.tsx';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';


const meta = {
	title: 'DPS/Blocks/Card/UserList/Container',
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
			<CardUserListContainer filterProps={{
				name: { ...args.filterProps.name, onChange: action('name changed') },
				checkbox: { ...args.filterProps.checkbox, onChange: action('isChecked') },
				select: { ...args.filterProps.select, onChange: action('city changed') }
			}} table={args.table} />
		);
	},
	args: {
		//TODO fix type
		filterProps: {
			name: {
				title: 'Name',
				titleBold: true
			},
			select: {
				title: 'City',
				placeHolder: 'Select City',
				titleBold: true
			},
			checkbox: {
				title: 'Highlight oldest per city'
			}
		},
		table: {
			selectedFields: ['id', 'firstName', 'birthDate', 'address.city'],
			initialLimit: 10
		}
	}

};

interface Filter {
	key: string;
	value: string;
}

export const Integration: Story = {
	render: (args) => {

		const [filter, setFilter] = useState<Filter | undefined>();

		const handleSelectOnChange = (selected: string) => {
			setFilter({key: 'address.city', value: selected});
			action('city changed')(selected);
		};

		return (
			<>
				<CardUserListContainer filterProps={{
					name: { ...args.filterProps.name, onChange: action('name changed') },
					checkbox: { ...args.filterProps.checkbox, onChange: action('highlight oldest checked') },
					select: { ...args.filterProps.select, onChange: handleSelectOnChange }
				}} table={{
					...args.table, filter
				}} />
			</>
		);
	},
	args: {
		table: {
			selectedFields: ['id', 'firstName', 'birthDate', 'address.city'],
			initialLimit: 10
		},
		filterProps: {
			name: {
				title: 'Name',
				titleBold: true
			},
			select: {
				title: 'City',
				placeHolder: 'Select City',
				titleBold: true
			},
			checkbox: {
				title: 'Highlight oldest per city'
			}
		}
	}

};





