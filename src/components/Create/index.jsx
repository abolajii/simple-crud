import React, { useState } from 'react';
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
import { useNavigate } from 'react-router';

const Create = () => {
	const navigate = useNavigate();
	const [teamName, setTeamName] = useState('');
	const [nickName, setNickName] = useState('');
	const [stadium, setStadium] = useState('');
	const [country, setCountry] = useState(null);
	const [region, setRegion] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			id: v4(),
			team_name: teamName,
			nick_name: nickName,
			stadium,
			country: country.value,
			region: region.value,
		};

		axios
			.post('http://localhost:5000/teams', data)
			.then((res) => {
				navigate(ROUTES.HOME);
			})
			.catch((err) => console.log(err));
	};

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
						<CreateButton>CREATE TEAM</CreateButton>
					</ButtonContainer>
				</BottomForm>
			</Inner>
		</Container>
	);
};

export default Create;
