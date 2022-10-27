import { Link } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Link,
};

export const Basic = () => {
	return (
		<Container column>
			<p>
				Some text <Link to="some-route">Some route</Link> and new page{' '}
				<Link to="https://google.com" blank>
					Google.com
				</Link>
			</p>
		</Container>
	);
};
