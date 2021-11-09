import { render } from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Roboto, sans-serif;
	}
	.css-1s2u09g-control{
		min-height: 50px !important;
		border: 1px solid grey !important;
		background-color:transparent !important;
	
	}
`;

render(
	<>
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</>,
	document.getElementById('root')
);
