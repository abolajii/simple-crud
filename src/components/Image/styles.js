import styled from 'styled-components';

export const Container = styled.div``;

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-color: red; */
	margin: auto;
	max-width: 900px;
	margin-top: 70px;
`;

export const ImageContainer = styled.div`
	height: 55px;
	width: 55px;
	border-radius: 50%;
	background: grey;
	margin-right: 10px;
	overflow: hidden;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const ImageFile = styled.input`
	width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
`;

export const AddText = styled.p``;

export const FileContainer = styled.div`
	/* background: blue; */
	position: relative;
`;
