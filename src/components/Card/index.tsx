import './index.css';
import React from 'react';

interface CardProps {
	children?: React.ReactNode;
}

const Card = (props: CardProps) => {
	const { children } = props;
	return (
		<div className="card">
			{children}
		</div>
	);
};

export default Card;