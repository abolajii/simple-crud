import { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
	const [modal, setModal] = useState(false);

	const [data, setData] = useState([]);
	const [text, setText] = useState('');
	const [id, setId] = useState(null);

	return (
		<ModalContext.Provider
			value={{ modal, setModal, text, data, setData, setText, id, setId }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
