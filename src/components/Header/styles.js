import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	height: 80px;
	background-color: crimson;
	z-index: 1000;
	width: 100%;
	top: 0px;
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	align-items: center;
	height: 100%;
`;

export const Logo = styled.p`
	color: white;
	font-size: 19px;
	font-weight: bold;
	letter-spacing: 1px;
`;
