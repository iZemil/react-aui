import { BackButton } from '.';
import { Button } from '..';

import Container from '../../Container';

export default {
	component: BackButton,
};

export const Basic = () => {
	return (
		<Container column>
			<Button.Back />

			<BackButton type="filled" />
		</Container>
	);
};
