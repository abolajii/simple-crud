import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const Background = styled(Modal)`
	background: rgba(0, 0, 0, 0.7);

	.modal-content {
		width: 400px;
		margin: auto;
		height: 300px;
	}
`;

export const Body = styled.div`
	width: 100%;
	height: 100%;
`;

export const Top = styled.div`
	text-align: center;
	padding-top: 30px;
`;

export const Text = styled.p`
	font-weight: bold;
	font-size: 20px;
	color: crimson;
	text-align: center;
	margin-top: 20px;
`;

export const ButtonContainer = styled.div`
	/* background: red; */
	width: 320px;
	margin: auto;
	display: flex;
	justify-content: space-around;
	margin-top: 70px;
`;

export const Decline = styled.button`
	outline: none;
	border: none;
	height: 30px;
	width: 100px;
	color: grey;
	cursor: pointer;
`;

export const Accept = styled(Decline)`
	background: orange;
	color: white;
`;
