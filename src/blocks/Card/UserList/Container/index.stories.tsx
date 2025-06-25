import type { Meta, StoryObj } from '@storybook/react';
import CardUserListContainer from './index';

const meta = {
	title: 'DPS/Blocks/Card/UserList/Container',
	component: CardUserListContainer,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof CardUserListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Integration: Story = {
	args: {
		filter: {
			name: {
				title: 'Name',
				titleBold: true
			},
			select: {
				title: 'City',
				titleBold: true,
				placeHolder: 'Select City'
			},

			checkbox: {
				title: 'Highlight oldest per city'
			}
		},
		options: {
			//TODO this is just hack, when merge firstName and lastName it maps to name. Need to add name to select to show in header.
			//fix using https://github.com/boraoren/dps-frontend-challenge/issues/55
			select: ['name','firstName', 'lastName', 'address.city', 'birthDate'],
			concat: [
				{
					values: ['firstName', 'lastName'],
					to: 'name'
				}, {
					//TODO this is just hack, its purpose is to merge columns by given using values.
					//fix using https://github.com/boraoren/dps-frontend-challenge/issues/55
					values: ['birthDate'],
					to: 'Birthday'
				}
			]
		},
		pagination: {
			limit: 10
		}
	}
};
