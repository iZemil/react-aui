import { TextArea } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: TextArea,
};

export const Basic = () => {
	const [value, setValue] = React.useState('');

	return (
		<Container.$>
			<TextArea onChange={(value) => setValue(value)} value={value} />
		</Container.$>
	);
};
