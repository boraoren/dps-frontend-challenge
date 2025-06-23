import type { Meta, StoryObj } from '@storybook/react';
import Select from './index.tsx';
import { fn } from '@storybook/test';
import Services from '../../services';
import SelectOption from './Item/index.option.ts';

const meta = {
	title: 'DPS/Components/Select',
	component: Select,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const getCitiesForSelectOptions = async (): Promise<SelectOption[]> => {
	const limitMax = await Services.user.getLimitMax();
	const selectedFields = ['address.city'];
	const apiResponse = await Services.user.getList({selectedFields, limitMax});
	const cities = Services.city.getList(apiResponse.users);
	const citiesSorted = Services.city.sortList(cities);
	return citiesSorted.map((city) => {
		return {
			text: city,
			value: city
		} as SelectOption;
	});
};

export const Default: Story = {
	args: {
		title: 'City',
		placeHolder: 'Select City',
		titleBold: true,
		onChange: fn(),
		options: await getCitiesForSelectOptions(),
	}
};


