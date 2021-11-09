import { render } from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalContextProvider from './context/Modal';

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
			<ModalContextProvider>
				<GlobalStyles />
				<App />
			</ModalContextProvider>
		</Router>
	</>,
	document.getElementById('root')
);
