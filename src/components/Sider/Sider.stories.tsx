import { Sider } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Sider,
};

export const Basic = () => {
	const [left, setLeft] = React.useState(false);
	const [right, setRight] = React.useState(false);

	return (
		<Container.$>
			<Button onClick={() => setRight(true)}>Default</Button>
			<Button.Burger onClick={() => setLeft(true)} />

			<Sider open={right} onClose={() => setRight(false)}>
				Default
			</Sider>
			<Sider open={left} onClose={() => setLeft(false)} width={480} position="left">
				Left
			</Sider>
		</Container.$>
	);
};
