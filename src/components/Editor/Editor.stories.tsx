import { Editor } from '.';
import * as React from 'react';

import Container from '../Container';
import { Divider } from '../Divider';

export default {
	component: Editor,
};

export const Basic = () => {
	const [value, setValue] = React.useState(
		`# Heading

Some **bold** and _italic_ text

By [github link](https://github.com/iZemil/react-aui)

\`\`\`
function hello() {
  console.log("Hello ReactAUI");
}
\`\`\`
`
	);

	return (
		<Container column>
			<Editor value={value} onChange={setValue} />

			<Divider color="blue">Editor preview bellow</Divider>

			<Editor value={value} preview />
		</Container>
	);
};
