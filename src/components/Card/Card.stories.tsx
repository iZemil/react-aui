import { Card } from '.';
import * as React from 'react';

import { wait } from '../../utils';
import Container from '../Container';

export default {
	component: Card,
};

export const Basic = () => {
	const [hidden, setHidden] = React.useState(false);
	const handleHidden = async () => {
		setHidden(true);

		if (hidden == false) {
			await wait(1000);

			setHidden(false);
		}
	};

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

			<Card hidden={hidden} onClick={handleHidden} row>
				<div>Row</div>
				<div>Click me</div>
			</Card>

			<Card dashed color="blue">
				<div>Row</div>
				<div>Row</div>
				<div>Row</div>
			</Card>
		</Container>
	);
};
