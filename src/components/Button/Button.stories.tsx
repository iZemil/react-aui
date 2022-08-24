import * as React from 'react';

import { useSnacks } from '../../utils';
import Container from '../Container';
import { Icons } from '../icons';

import { Button } from './index';

export default {
	component: Button,
};

export const Type = () => {
	return (
		<Container.$>
			<Button>Default</Button>
			<Button type="filled">Filled</Button>
			<Button type="text">Text</Button>
			<Button type="dashed">Dashed</Button>
		</Container.$>
	);
};

export const Size = () => {
	return (
		<Container.$ column>
			<Container.$>
				<Button size="small">small</Button>
				<Button size="medium">medium</Button>
				<Button size="large">large</Button>
			</Container.$>

			<Container.$>
				<Button icon size="small">
					<Icons.Home />
				</Button>
				<Button icon size="medium">
					<Icons.Home />
				</Button>
				<Button icon size="large">
					<Icons.Home />
				</Button>
			</Container.$>

			<Container.$>
				<Button icon size="small" circle>
					<Icons.Home />
				</Button>
				<Button icon size="medium" circle>
					<Icons.Home />
				</Button>
				<Button icon size="large" circle>
					<Icons.Home />
				</Button>
			</Container.$>
		</Container.$>
	);
};

export const Color = () => {
	return (
		<Container.$ column>
			<Container.$>
				<Button>Default</Button>
				<Button color="red">red</Button>
				<Button color="green">green</Button>
				<Button color="blue">blue</Button>
			</Container.$>

			<Container.$>
				<Button type="filled">Default</Button>
				<Button type="filled" color="red">
					red
				</Button>
				<Button type="filled" color="green">
					green
				</Button>
				<Button type="filled" color="blue">
					blue
				</Button>
			</Container.$>
		</Container.$>
	);
};

export const Icon = () => {
	return (
		<Container.$ column>
			<Container.$>
				<Button>
					<Icons.Home />
					Home
				</Button>
				<Button>
					<Icons.Home />
				</Button>
				<Button circle>
					<Icons.Home />
				</Button>
				<Button type="text" circle>
					<Icons.Home />
				</Button>
			</Container.$>

			<Container.$>
				<Button type="filled">
					<Icons.Home />
					Home
				</Button>
				<Button type="filled">
					<Icons.Home />
				</Button>
				<Button type="filled" circle>
					<Icons.Home />
				</Button>
			</Container.$>
		</Container.$>
	);
};

export const Other = () => {
	const { snackOk } = useSnacks();

	return (
		<Container.$ column>
			<Container.$>
				<Button block>Block</Button>
			</Container.$>

			<Container.$>
				<Button disabled>Disabled</Button>

				<Button circle disabled>
					<Icons.Home />
				</Button>
			</Container.$>

			<Container.$>
				<Button
					onClick={() => {
						// TODO: not working
						snackOk('Success');
					}}
				>
					On Click
				</Button>
			</Container.$>

			<Container.$>
				<Button to="#link">Link</Button>

				<Button to="#link" type="text">
					Link
				</Button>

				<Button to="#link" type="text">
					<Icons.Link />
					Link
				</Button>

				<Button to="#link" type="text" size="small">
					<Icons.Link />
					Link
				</Button>

				<Button to="https://google.com" type="text" blank>
					<Icons.Link />
					Target Blank Link
				</Button>
			</Container.$>
		</Container.$>
	);
};
