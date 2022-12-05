import { Text } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Text,
};

export const Basic = () => {
	return (
		<Container column>
			<Text>Default Text Component</Text>

			<Text size="small" color="grey">
				Small Grey Text
			</Text>

			<Text>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				<Text color="blue" inline>
					{' '}
					It has survived not only five centuries, but also the leap into electronic typesetting, remaining
					essentially unchanged.{' '}
				</Text>
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
				more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</Text>

			<Text maxLength={15} size="small">
				Some limited comment... Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when
				an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</Text>
		</Container>
	);
};
