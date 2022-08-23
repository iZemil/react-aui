import { CopyButton } from '.';
import * as React from 'react';

import Container from '../../Container';

export default {
	component: CopyButton,
};

export const Type = () => {
	const currentDate = new Date().toString();

	return (
		<Container.$ column>
			<CopyButton value={currentDate} />

			<CopyButton value={currentDate}>With content</CopyButton>

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
