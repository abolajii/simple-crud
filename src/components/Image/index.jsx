import React, { useState } from 'react';
import {
	Container,
	ImageContainer,
	Inner,
	Image,
	ImageFile,
	FileContainer,
	AddText,
} from './styles';

const ImageComponent = () => {
	const [selected, setSelected] = useState(null);
	const [selectedName, setSelectedName] = useState(null);

	const handleChange = (e) => {
		setSelectedName(e.target.files[0].name);

		const file = new FileReader();
		console.log(file);

		file.onload = () => {
			if (file.readyState === 2) {
				setSelected(file.result);
			}
		};

		file.readAsDataURL(e.target.files[0]);
	};

	return (
		<Container>
			<Inner>
				<ImageContainer>
					<Image src={selected} alt='' />
				</ImageContainer>
				<FileContainer>
					<ImageFile onChange={handleChange} type='file' />
					<AddText>Add Image</AddText>{' '}
				</FileContainer>
			</Inner>
			<p>{selectedName}</p>
		</Container>
	);
};

export default ImageComponent;
