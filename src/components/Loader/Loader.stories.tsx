import { Loader } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Loader,
};

export const Basic = () => {
	return (
		<Container.$ column>
			<Loader />

			<Loader size={10} relative />

			<Loader size={2} relative />
		</Container.$>
	);
};

export const Content = () => {
	const [isLoaded, setLoaded] = React.useState(false);

	return (
		<>
			<Button onClick={() => setLoaded(!isLoaded)}>Toggle loading</Button>

			<Container.$ column>
				<Loader active={!isLoaded}>
					<p>First loader content</p>
				</Loader>

				<Loader
					active={!isLoaded}
					skeleton={
						<p>
							Any skeleton lib:
							<a href="https://www.npmjs.com/package/react-loading-skeleton">
								Example: react-loading-skeleton
							</a>
						</p>
					}
				>
					<p>Skeleton loader content</p>
				</Loader>
			</Container.$>
		</>
	);
};
