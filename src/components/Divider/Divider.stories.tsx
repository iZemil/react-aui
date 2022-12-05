import { Divider } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Divider,
};

const Content = () => <div>Some content</div>;

export const Basic = () => {
	return (
		<Container column style={{ gap: 0 }}>
			<Content />
			<Divider />

			<Content />

			<Divider size="small" />

			<Content />

			<Divider size="medium">Medium</Divider>

			<Content />

			<Divider size="large">Large</Divider>

			<Content />

			<Divider dashed>Dashed</Divider>

			<Content />

			<Divider color="red">Color: Red</Divider>

			<Divider top={40} bottom={60}>
				Top-Bottom
			</Divider>

			<Content />

			<Divider color="blue" dashed>
				<Button color="blue">Blue/Dashed</Button>
			</Divider>

			<Content />
		</Container>
	);
};
