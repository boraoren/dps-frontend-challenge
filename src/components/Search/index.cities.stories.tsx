import type { Meta, StoryObj } from '@storybook/react';
import Search from './index.tsx';
import { fn } from '@storybook/test';
import Services from '../../services';
import SelectOption from './Select/index.option.ts';

const meta = {
	title: 'DPS/Components/Search',
	component: Search,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	args: { onChange: fn() }
} satisfies Meta<typeof Search>;

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
	args: {
		title: 'City',
		placeHolder: 'Select City',
		selectOptions: await getCitiesForSelectOptions()
	}
};

/*

<option value="" disabled selected>Select City</option>
			<option value="istanbul">Istanbul</option>
			<option value="ankara">Ankara</option>
			<option value="izmir">Izmir</option>


 */



