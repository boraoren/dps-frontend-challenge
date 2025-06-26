import type { Meta, StoryObj } from '@storybook/react';
import CardUserListContainer from './index';

const meta = {
	title: 'DPS/Blocks/Card/UserList/Container',
	component: CardUserListContainer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof CardUserListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integration: Story = {
	args: {
		filter: {
			name: {
				title: 'Name',
				titleBold: true,
				delay: 0,
			},

			select: {
				title: 'City',
				titleBold: true,
				placeHolder: 'Select City',
			},

			checkbox: {
				title: 'Highlight oldest per city',
			},
		},
		options: {
			select: [
				'id',
				'name',
				'firstName',
				'lastName',
				'address.city',
				'birthDate',
			],

			concat: [
				{
					values: ['firstName', 'lastName'],
					to: 'name',
				},
				{
					values: ['birthDate'],
					to: 'Birthday',
				},
			],
		},
		pagination: {
			limit: 15,
			skip: 0,
		},
	},
};
