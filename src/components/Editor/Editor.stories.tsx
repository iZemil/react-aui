import { Editor } from '.';
import * as React from 'react';

import { useModal } from '../../utils';
import { Button } from '../Button';
import Container from '../Container';
import { Divider } from '../Divider';
import { Modal } from '../Modal';

export default {
	component: Editor,
};

export const Basic = () => {
	const modal = useModal();
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
			<Button
				onClick={() => {
					modal.show(
						<Modal open title={<Modal.Title>Editor</Modal.Title>} onClose={modal.hide}>
							<Editor value={value} onChange={setValue} />
						</Modal>
					);
				}}
			>
				Modal
			</Button>

			<Editor value={value} onChange={setValue} />

			<Divider color="blue">Editor preview bellow</Divider>

			<Editor value={value} preview />
		</Container>
	);
};
