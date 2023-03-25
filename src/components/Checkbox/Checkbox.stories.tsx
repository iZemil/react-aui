import { Checkbox } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Checkbox,
};

export const Basic = () => {
	const [value, toggle] = React.useState(false);

	return (
		<Container column>
			<Checkbox value={value} onChange={toggle} />

			<Checkbox value={value} onChange={toggle}>
				Checkbox
			</Checkbox>

			<Checkbox disabled value={value} onChange={toggle}>
				Disabled
			</Checkbox>

			<Checkbox value={value} onChange={toggle} color="main">
				Color
			</Checkbox>
		</Container>
	);
};
