import { Card } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Card,
};

export const Basic = () => {
	return (
		<Container column>
			<Card>
				<div>Row</div>
				<div>Row</div>
				<div>Row</div>
			</Card>

			<Card color="main">
				<div>Row</div>
				<div>Row</div>
				<div>Row</div>
			</Card>
		</Container>
	);
};
