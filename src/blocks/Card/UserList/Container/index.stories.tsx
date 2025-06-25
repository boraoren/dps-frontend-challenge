import type { Meta, StoryObj } from '@storybook/react';
import CardUserList from './index.tsx';
import CardUserListContainer from './index.tsx';
import useTableForDatabase from '../../../Table/index.hook.database.tsx';

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

interface Concat{
	values: string[];
	to: string;
}

interface Options {
	select: string[];
	concat?: Concat[]
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
			select: ['id', 'firstName','lastName', 'address.city'],
			concat: [{
				values: ['firstName','lastName'],
				to: 'Name'
			}]
		};

		const {
			table,
			handleSelectOnChange,
			handleTableOnScrollEnd,
			isLoading,
			handleCheckboxOnChange,
			handleNameOnChange,
		} = useTableForDatabase(
			pagination,
			options
		);

		return (
			<>
				<CardUserListContainer filter={{
					name: { ...args.filter.name, onChange: handleNameOnChange },
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
				titleBold: true
			},
			checkbox: {
				title: 'Highlight oldest per city'
			}
		}
	}

}
;





