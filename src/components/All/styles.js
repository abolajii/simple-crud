import styled from 'styled-components/macro';
import { MdEdit, MdDelete } from 'react-icons/md';

export const Container = styled.div`
	position: relative;
	top: 80px;
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	align-items: center;
	height: 100%;
`;

export const BottomTable = styled.div`
	margin-top: 20px;
	min-height: 700px;
	background: #e5e5e5;
`;

export const Table = styled.table`
	width: 100%;
`;

export const TableHeader = styled.thead``;

export const TableHeading = styled.th`
	padding: 10px 0;
	text-align: center;
`;

export const TableColumn = styled.td`
	text-align: center;

	${({ double }) =>
		double &&
		`display: flex;
	align-items: center;
	justify-content: space-around;
`}
`;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody``;

export const Edit = styled(MdEdit)`
	color: orange;
	cursor: pointer;
`;

export const Delete = styled(MdDelete)`
	cursor: pointer;

	color: red;
`;
