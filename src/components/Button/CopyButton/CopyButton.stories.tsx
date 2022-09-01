import { CopyButton } from '.';
import * as React from 'react';

import Container from '../../Container';

export default {
	component: CopyButton,
};

export const Basic = () => {
	const currentDate = new Date().toString();

	return (
		<Container.$ column>
			<CopyButton value={currentDate} />

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
