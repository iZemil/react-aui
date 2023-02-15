import { Editor } from '.';
import * as React from 'react';
import styled from 'styled-components';

import { border, padding } from '../../styles';
import { useModal } from '../../utils';
import { Button } from '../Button';
import Container from '../Container';
import { Divider } from '../Divider';
import { Input } from '../Input';
import { MarkdownSupport } from '../MarkdownSupport';
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

interface IDescData {
	title: string;
	description: string;
}

const S = {
	$: styled.div`
		display: flex;
		flex-direction: column;

		.ReactCodeMirror {
			border: ${border('grey')};
			padding: ${padding('medium')};
		}
	`,
};
export const Description = () => {
	const [data, updateData] = React.useState<IDescData>({ title: '', description: '' });

	const handleChange = (updated: Partial<IDescData>) => updateData({ ...data, ...updated });

	return (
		<Container column>
			<Input
				label="Title"
				value={data.title}
				onChange={(value) =>
					handleChange({
						title: value,
					})
				}
			/>
			<S.$>
				<Editor
					label={
						<>
							Description
							<MarkdownSupport />
						</>
					}
					value={data.description}
					onChange={(value) =>
						handleChange({
							description: value,
						})
					}
				/>
			</S.$>

			<p>output: {JSON.stringify(data)}</p>
		</Container>
	);
};
