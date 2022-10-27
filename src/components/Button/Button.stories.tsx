import { Icon } from '..';
import * as React from 'react';

import { useSnacks } from '../../utils';
import Container from '../Container';

import { Button } from './index';

const { base: BaseIcon } = Icon;

export default {
	component: Button,
};

export const Type = () => {
	return (
		<Container>
			<Button>Default</Button>
			<Button type="filled">Filled</Button>
			<Button type="text">Text</Button>
			<Button type="dashed">Dashed</Button>
		</Container>
	);
};

export const Size = () => {
	return (
		<Container column>
			<Container>
				<Button size="small">small</Button>
				<Button size="medium">medium</Button>
				<Button size="large">large</Button>
			</Container>

			<Container>
				<Button icon size="small">
					<BaseIcon.Home />
				</Button>
				<Button icon size="medium">
					<BaseIcon.Home />
				</Button>
				<Button icon size="large">
					<BaseIcon.Home />
				</Button>
			</Container>

			<Container>
				<Button icon size="small" circle>
					<BaseIcon.Home />
				</Button>
				<Button icon size="medium" circle>
					<BaseIcon.Home />
				</Button>
				<Button icon size="large" circle>
					<BaseIcon.Home />
				</Button>
			</Container>
		</Container>
	);
};

export const Color = () => {
	return (
		<Container column>
			<Container>
				<Button>Default</Button>
				<Button color="red">red</Button>
				<Button color="green">green</Button>
				<Button color="blue">blue</Button>
			</Container>

			<Container>
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
			</Container>
		</Container>
	);
};

export const Icons = () => {
	return (
		<Container column>
			<Container>
				<Button>
					<BaseIcon.Home />
					Home
				</Button>
				<Button>
					<BaseIcon.Home />
				</Button>
				<Button circle>
					<BaseIcon.Home />
				</Button>
				<Button type="text" circle>
					<BaseIcon.Home />
				</Button>
			</Container>

			<Container>
				<Button type="filled">
					<BaseIcon.Home />
					Home
				</Button>
				<Button type="filled">
					<BaseIcon.Home />
				</Button>
				<Button type="filled" circle>
					<BaseIcon.Home />
				</Button>
			</Container>
		</Container>
	);
};

export const Other = () => {
	const snack = useSnacks();

	return (
		<Container column>
			<Container>
				<Button type="filled" block>
					Block
				</Button>
			</Container>

			<Container>
				<Button disabled>Disabled</Button>

				<Button circle disabled>
					<BaseIcon.Home />
				</Button>
			</Container>

			<Container>
				<Button type="filled" onClick={() => snack.success('Success')}>
					On Click
				</Button>
			</Container>

			<Container>
				<Button to="#link">Link</Button>

				<Button to="#link" type="text">
					Link
				</Button>

				<Button to="#link" type="text">
					<BaseIcon.Link />
					Link
				</Button>

				<Button to="#link" type="text" size="small">
					<BaseIcon.Link />
					Link
				</Button>

				<Button to="https://google.com" type="text" blank>
					<BaseIcon.Link />
					Target Blank Link
				</Button>
			</Container>
		</Container>
	);
};
