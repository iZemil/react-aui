import { Switcher } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Switcher,
};

export const Basic = () => {
	const [value, toggle] = React.useState(false);

	return (
		<Container column>
			<Switcher value={value} onChange={toggle} />

			<Switcher value={value} onChange={toggle}>
				Switcher
			</Switcher>

			<Switcher disabled value={value} onChange={toggle}>
				Disabled
			</Switcher>

			<Switcher value={value} onChange={toggle} color="red">
				Color
			</Switcher>
		</Container>
	);
};
