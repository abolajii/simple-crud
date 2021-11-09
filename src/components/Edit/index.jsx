import React, { useEffect, useState } from 'react';
import Button from '../Button';
import {
	BottomForm,
	BoxOne,
	BoxTwo,
	ButtonContainer,
	Container,
	CreateButton,
	Form,
	Inner,
	Input,
	InputContainer,
	Label,
	MySelect,
} from './styles';
import * as ROUTES from '../../constants/routes';
import axios from 'axios';
import { v4 } from 'uuid';
import { useNavigate, useParams } from 'react-router';
const Edit = () => {
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/teams/${id}`)
			.then((res) => {
				const { stadium, team_name, country, region, nick_name } = res.data;
				const countryLabel = country.charAt(0).toUpperCase() + country.slice(1);
				const regionLabel = region.charAt(0).toUpperCase() + region.slice(1);
				setNickName(nick_name);
				setStadium(stadium);
				setTeamName(team_name);
				setCountry({ value: country, label: countryLabel });
				setRegion({ value: region, label: regionLabel });
			})
			.catch((err) => console.log(err));
	}, []);

	const [teamName, setTeamName] = useState('');
	const [nickName, setNickName] = useState('');
	const [stadium, setStadium] = useState('');
	const [country, setCountry] = useState(null);
	const [region, setRegion] = useState(null);

	const regionOption = [
		{
			value: 'West Africa',
			label: 'West Africa',
		},
		{
			value: 'East Africa',
			label: 'East Africa',
		},
	];

	const countryOption = [
		{
			value: 'South Africa',
			label: 'South Africa',
		},
		{
			value: 'Nigeria',
			label: 'Nigeria',
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		const newData = {
			stadium,
			team_name: teamName,
			country: country.value,
			region: region.value,
			nick_name: nickName,
		};
		axios
			.put(`http://localhost:5000/teams/${id}`, newData)
			.then((res) => {
				navigate(ROUTES.HOME);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container>
			<Inner>
				<Button to={ROUTES.HOME} name='BACK' />

				<BottomForm onSubmit={(e) => handleSubmit(e)}>
					<Form>
						<BoxOne>
							<InputContainer>
								<Label>Team Name</Label>
								<Input
									onChange={({ target }) => setTeamName(target.value)}
									value={teamName}
									placeholder='Enter team name'
									type='text'
								/>
							</InputContainer>
							<InputContainer>
								<Label>Nickname</Label>
								<Input
									type='text'
									value={nickName}
									onChange={({ target }) => setNickName(target.value)}
									placeholder='Enter nickname'
								/>
							</InputContainer>
							<InputContainer>
								<Label>Stadium</Label>
								<Input
									onChange={({ target }) => setStadium(target.value)}
									value={stadium}
									type='text'
									placeholder='Enter Stadium name'
								/>
							</InputContainer>
						</BoxOne>
						<BoxTwo>
							<InputContainer>
								<Label>Region</Label>
								<MySelect
									value={region}
									onChange={setRegion}
									options={regionOption}
								/>
							</InputContainer>
							<InputContainer>
								<Label>Country</Label>
								<MySelect
									value={country}
									onChange={setCountry}
									options={countryOption}
								/>
							</InputContainer>
						</BoxTwo>
					</Form>
					<ButtonContainer>
						<CreateButton>SAVE CHANGE</CreateButton>
					</ButtonContainer>
				</BottomForm>
			</Inner>
		</Container>
	);
};

export default Edit;
