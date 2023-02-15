import { Editor } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';
import { Divider } from '../Divider';
import { Input } from '../Input';
import { MarkdownSupport } from '../MarkdownSupport';

export default {
	component: Editor,
};

export const Basic = () => {
	const [value, setValue] = React.useState(
		`# Heading

Some **bold** and _italic_ text \`inline code\` ~~XXX-XXX~~

![some image](https://camo.githubusercontent.com/91fc3a33ec28d9a77a830176ce0fc8926714e3729b3fb1323f59e956820b7f6b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f636f64652d73697a652f697a656d696c2f72656163742d617569)
![Broken](/broken.jpg)

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
			<Editor label="Editor" value={value} onChange={setValue} />

			<Divider color="blue">EDITOR PREVIEW</Divider>

			<Editor value={value} preview />
		</Container>
	);
};

interface IDescData {
	title: string;
	description: string;
}

export const Description = () => {
	const [data, updateData] = React.useState<IDescData>({ title: '', description: '' });

	const handleChange = (updated: Partial<IDescData>) => updateData({ ...data, ...updated });
	const handleClick = () => {
		handleChange({ description: `random description value: ${Math.random().toString(32)}` });
	};

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

			<p>output: {JSON.stringify(data)}</p>
			<Button onClick={handleClick}>Change Description</Button>
		</Container>
	);
};
