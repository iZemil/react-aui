import { Editor } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Editor,
};

export const Basic = () => {
	const [value, setValue] = React.useState('');

	return (
		<Container>
			<Editor label="Description Editor" value={value} onChange={setValue} tools />
		</Container>
	);
};
