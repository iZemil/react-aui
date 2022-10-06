import { Sider } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Sider,
};

export const Basic = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Container.$>
			<Button.Burger onClick={() => setOpen(!open)} />

			<Sider open={open} onClose={() => setOpen(false)} width={320} position="right">
				Default
			</Sider>
		</Container.$>
	);
};
