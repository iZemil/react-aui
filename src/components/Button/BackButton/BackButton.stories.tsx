import { BackButton } from '.';
import * as React from 'react';

import Container from '../../Container';

export default {
	component: BackButton,
};

export const Basic = () => {
	return (
		<Container.$ column>
			<BackButton />

			<BackButton type="filled" />
		</Container.$>
	);
};
