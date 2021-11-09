import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 10px;
`;

export const Inner = styled.div`
	display: flex;
	justify-content: end;
`;

export const ButtonLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	background-color: crimson;
	height: 30px;
	color: white;
	padding: 10px 20px;
	border-radius: 3px;
	&:hover {
		opacity: 0.8;
	}
`;
