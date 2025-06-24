import type { Meta, StoryObj } from '@storybook/react';
import CardUserList from './index.tsx';
import CardUserListContainer from './index.tsx';
import { action } from '@storybook/addon-actions';
import { useTable } from '../../../Table/index.hook.tsx';
import useTableForDatabase from '../../../Table/index.hook.database.tsx';
import Features from '../../../../features';
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

interface Options {
	select: string[];
}

interface Filters {
	name?: string;
	city?: string;
	oldestPerCity?: boolean;
}

interface Pagination {
	limit: number;
	skip?: number;
}


export default meta;
type Story = StoryObj<typeof meta>;

export const Integration: Story = {
	render: (args) => {

		const pagination: Pagination = {
			limit: 10
		};
		const options: Options = {
			select: ['id', 'firstName','address.city']
		};

		const { table, handleSelectOnChange, handleTableOnScrollEnd, isLoading, handleCheckboxOnChange } = useTableForDatabase(
			pagination,
			options,
		);

		const handleOnNameChange = (value: string) => {
			action('name changed')(value);
		};


		return (
			<>
				<CardUserListContainer filter={{
					name: { ...args.filter.name, onChange: handleOnNameChange },
					checkbox: { ...args.filter.checkbox, onChange: handleCheckboxOnChange },
					select: { ...args.filter.select, onChange: handleSelectOnChange }
				}} table={table} tableOnScrollEnd={handleTableOnScrollEnd} />
				{isLoading ? <div>LOADING...</div> : <div>.</div>}
			</>
		);
	},
	args: {
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
	}

}
;





