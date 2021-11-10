import axios from 'axios';
import React, { useContext } from 'react';
import { ModalContext } from '../../context/Modal';
import {
	Accept,
	Background,
	Body,
	ButtonContainer,
	Decline,
	Text,
	Top,
} from './styles';

const Modal = () => {
	const { modal, text, setModal, setData, id } = useContext(ModalContext);

	const deleteTeam = () => {
		// axios
		// 	.delete(`http://localhost:5000/teams/${id}`)
		// 	.then((res) => {
		// 		setModal(false);

		// 		axios
		// 			.get('http://localhost:5000/teams')
		// 			.then((res) => {
		// 				setData(res.data);
		// 			})
		// 			.catch((err) => console.log(err));
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		axios
			.all(
				[axios.delete(`http://localhost:5000/teams/${id}`)],
				axios.get('http://localhost:5000/teams')
			)
			.then(
				axios.spread((del, get) => {
					setModal(false);
					setData(get);
				})
			)
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<Background
			show={modal}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Body>
				<Top>Are you sure you want to delete</Top>
				<Text>{text}</Text>
				<ButtonContainer>
					<Accept onClick={deleteTeam}>YES</Accept>
					<Decline onClick={() => setModal(false)}>NO</Decline>
				</ButtonContainer>
			</Body>
		</Background>
	);
};

export default Modal;
