import { Markdown } from '.';
import * as React from 'react';

import Container from '../Container';
import { Divider } from '../Divider';
import { Editor } from '../Editor';

export default {
	component: Markdown,
};

export const Basic = () => {
	const [md, changeMd] = React.useState(`### Header
**bold** _italic_
[github link](https://github.com/iZemil/react-aui)\n
\`const name = "Hello world";\``);

	return (
		<Container.$ column>
			<Editor value={md} onChange={changeMd} rows={5} tools />

			<Divider dashed text="Preview" />

			<Markdown value={md} />
		</Container.$>
	);
};
