import { CopyButton } from '.';
import { Button } from '..';
import * as React from 'react';

import Container from '../../Container';

export default {
	component: CopyButton,
};

export const Basic = () => {
	const currentDate = new Date().toString();

	return (
		<Container.$ column>
			<Button.Copy value={currentDate} />

			<CopyButton value={currentDate}>Copy</CopyButton>

			<CopyButton value="filled" type="filled">
				filled
			</CopyButton>

			<CopyButton value="bordered" type="bordered">
				bordered
			</CopyButton>

			<CopyButton value="color" color="blue">
				color
			</CopyButton>

			<CopyButton value={() => Math.random()}>Dynamic value</CopyButton>

			<Container.$>
				<CopyButton size="small" value={currentDate}>
					Small
				</CopyButton>
				<CopyButton size="medium" value={currentDate}>
					Medium
				</CopyButton>
				<CopyButton size="large" value={currentDate}>
					Large
				</CopyButton>
			</Container.$>
		</Container.$>
	);
};

export const Value = () => {
	const [value, setValue] = React.useState(
		`function copyBuffer(value) {
	return navigator.clipboard.writeText(value)
}
`
	);

	return (
		<Container.$ column>
			<CopyButton value={'0x70D6C988a31A0f6220903446579125A0E9F200e2'}>String</CopyButton>

			<CopyButton value={Math.random()}>Number</CopyButton>

			<CopyButton value={() => (Math.random() > 0.5 ? true : false)}>Boolean</CopyButton>

			<CopyButton value={undefined}>undefined</CopyButton>

			<CopyButton value={null}>null</CopyButton>

			<CopyButton value={() => Math.random()}>Dynamic</CopyButton>

			<CopyButton value={() => value} size="small">
				Copy textarea
			</CopyButton>
			<textarea onChange={(e) => setValue(e.target.value)} value={value} />
		</Container.$>
	);
};
