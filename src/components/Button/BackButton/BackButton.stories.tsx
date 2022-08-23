import { BackButton } from '.';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '../../Container';

export default {
	component: BackButton,
};

export const Basic = () => {
	return (
		<BrowserRouter>
			<Container.$ column>
				<BackButton />
			</Container.$>
		</BrowserRouter>
	);
};
