import React from 'react';
import * as ROUTES from '../../constants/routes';

import {
	Container,
	Inner,
	SearchInput,
	SearchIcon,
	SearchInputContainer,
	SearchText,
	Box,
	CreateButton,
} from './styles';

const Search = () => {
	return (
		<Container>
			<Inner>
				<Box>
					<SearchText>Search</SearchText>
					<SearchInputContainer>
						<SearchIcon />
						<SearchInput type='text' placeholder='Search' />
					</SearchInputContainer>
				</Box>
				<Box>
					<CreateButton to={ROUTES.CREATE}>CREATE</CreateButton>
				</Box>
			</Inner>
		</Container>
	);
};

export default Search;
