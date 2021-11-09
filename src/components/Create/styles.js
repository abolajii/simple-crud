import styled from 'styled-components/macro';
import Select from 'react-select';

export const Container = styled.div`
	position: relative;
	top: 80px;
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	align-items: center;
	/* height: 100%; */
`;

export const Form = styled.div`
	width: 100%;
	display: flex;
	/* min-height: 500px; */
`;

export const BottomForm = styled.form`
	margin-top: 30px;
	background: #d8d8d8;
`;

export const BoxOne = styled.div`
	margin-top: 50px;
	width: calc(50%);
	padding: 20px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const Input = styled.input`
	height: 50px;
	padding: 20px;
	background: transparent;
	outline: none;
	border: none;
	border: 1px solid grey;
`;

export const Label = styled.label`
	margin-bottom: 10px;
`;

export const BoxTwo = styled.div`
	/* background-color: pink; */
	width: calc(50%);
	margin-top: 50px;
	padding: 20px;
`;

export const MySelect = styled(Select)`
	/* padding: 6px; */
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 40px;
`;

export const CreateButton = styled.button`
	height: 38px;
	width: 129px;
	background-color: crimson;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
`;
