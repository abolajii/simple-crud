import React, { useContext, useEffect } from 'react';
import { Search } from '..';
import {
	BottomTable,
	Container,
	Delete,
	Edit,
	Inner,
	Table,
	TableBody,
	TableColumn,
	TableHeader,
	TableHeading,
	TableRow,
} from './styles';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { ModalContext } from '../../context/Modal';

const Home = () => {
	const { setModal, data, setData, setText, setId } = useContext(ModalContext);

	useEffect(() => {
		axios
			.get('http://localhost:5000/teams')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, [setData]);

	return (
		<Container>
			<Inner>
				<Search />
				<BottomTable>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeading>#</TableHeading>
								<TableHeading>Team Name</TableHeading>
								<TableHeading>Nickname</TableHeading>
								<TableHeading>Country</TableHeading>
								<TableHeading>Action</TableHeading>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data &&
								data.map((each, index) => {
									return (
										<TableRow key={index}>
											<TableColumn>{index + 1}</TableColumn>
											<TableColumn>{each.team_name}</TableColumn>
											<TableColumn>{each.nick_name}</TableColumn>
											<TableColumn>{each.country}</TableColumn>

											<TableColumn double='double'>
												<Link to={`/edit/${each.id}`}>
													<Edit />
												</Link>
												<Delete
													onClick={() => {
														setModal(true);
														setText(each.team_name);
														setId(each.id);
													}}
												/>
											</TableColumn>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</BottomTable>
			</Inner>
		</Container>
	);
};

export default Home;
