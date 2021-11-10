import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
	margin-top: 10px;
`;

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Box = styled.div`
	display: flex;
	align-items: center;
`;
export const SearchText = styled.span`
	margin-right: 8px;
`;

export const SearchIcon = styled(MdSearch)`
	margin-right: 7px;
`;

export const SearchInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	background-color: transparent;
`;

export const SearchInputContainer = styled.div`
	height: 30px;
	background: #d8d8d8;
	display: flex;
	align-items: center;
	min-width: 300px;
	padding: 0 6px;
`;

export const CreateButton = styled(Link)`
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
		color: white;
	}
`;
