import { Checkbox } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Checkbox,
};

export const Basic = () => {
	const [checked, toggle] = React.useState(false);

	return (
		<Container column>
			<Checkbox checked={checked} onClick={toggle} />

			<Checkbox checked={checked} onClick={toggle}>
				Checkbox
			</Checkbox>

			<Checkbox disabled checked={checked} onClick={toggle}>
				Disabled
			</Checkbox>

			<Checkbox checked={checked} onClick={toggle} color="main">
				Color
			</Checkbox>
		</Container>
	);
};
