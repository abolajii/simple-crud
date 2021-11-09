import React from 'react';
import { ButtonLink, Container, Inner } from './styles';

const Button = ({ name, to }) => {
	return (
		<Container>
			<Inner>
				<ButtonLink to={to}>{name}</ButtonLink>
			</Inner>
		</Container>
	);
};

export default Button;
