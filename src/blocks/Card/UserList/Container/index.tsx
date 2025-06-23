import CardUserList, { CardUserListProps } from '../index.tsx';
import { useEffect } from 'react';
import Features from '../../../../features';

const CardUserListContainer = (props: CardUserListProps) => {
	const { filterProps, table } = props;

	useEffect(() => {
		const fetchCities = async () => {
			filterProps.select.options = await Features.filters.city.getCities();
		};
		fetchCities();
	}, []);

	return (
		<CardUserList filterProps={filterProps} table={table} />
	);
};

export default CardUserListContainer;