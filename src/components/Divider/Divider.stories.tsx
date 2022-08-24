import { Divider } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Divider,
};

const Content = () => <div>Some content</div>;

export const Basic = () => {
	return (
		<Container.$ column style={{ gap: 0 }}>
			<Content />
			<Divider />

			<Content />
			<Divider text="small" size="small" />

			<Content />
			<Divider text="medium" size="medium" />

			<Content />
			<Divider text="large" size="large" />

			<Content />
			<Divider text="dashed" dashed />

			<Content />
			<Divider text="red" color="red" />

			<Content />
			<Divider text="blue dashed" color="blue" dashed />
			<Content />
		</Container.$>
	);
};
