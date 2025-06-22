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
	args: { onChange: fn() }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const getCitiesForSelectOptions = async (): Promise<SelectOption[]> => {
	const limitMax = await Services.user.getLimitMax();
	const selectedFields = ['address.city'];
	const users = await Services.user.getList(selectedFields,limitMax);
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
	args: {
		title: 'City',
		placeHolder: 'Select City',
		selectOptions: await getCitiesForSelectOptions()
	}
};


