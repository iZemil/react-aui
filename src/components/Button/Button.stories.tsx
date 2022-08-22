import * as React from 'react';
import styled from 'styled-components';

import { useSnacks } from '../../utils';
import { Icons } from '../icons';

import { Button } from './index';

export default {
	component: Button,
};

const S = {
	Container: {
		$: styled.div<{ column?: boolean }>`
			display: flex;
			gap: 20px;

			${(props) =>
				props.column
					? `
					flex-direction: column;
			`
					: `
					align-items: center;
			`}
		`,
	},
};

export const Type = () => {
	return (
		<S.Container.$>
			<Button>Default</Button>
			<Button type="filled">Filled</Button>
			<Button type="text">Text</Button>
			<Button type="dashed">Dashed</Button>
		</S.Container.$>
	);
};

export const Size = () => {
	return (
		<S.Container.$>
			<Button size="small">small</Button>
			<Button size="medium">medium</Button>
			<Button size="large">large</Button>
		</S.Container.$>
	);
};

export const Color = () => {
	return (
		<S.Container.$ column>
			<S.Container.$>
				<Button>Default</Button>
				<Button color="red">red</Button>
				<Button color="green">green</Button>
				<Button color="blue">blue</Button>
			</S.Container.$>

			<S.Container.$>
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
			</S.Container.$>
		</S.Container.$>
	);
};

export const Icon = () => {
	return (
		<S.Container.$ column>
			<S.Container.$>
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
			</S.Container.$>

			<S.Container.$>
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
			</S.Container.$>
		</S.Container.$>
	);
};

export const Other = () => {
	const { snackOk } = useSnacks();

	return (
		<S.Container.$ column>
			<S.Container.$>
				<Button block>Block</Button>
			</S.Container.$>

			<S.Container.$>
				<Button disabled>Disabled</Button>
			</S.Container.$>

			<S.Container.$>
				<Button circle>
					<Icons.Home />
				</Button>
			</S.Container.$>

			<S.Container.$>
				<Button
					onClick={() => {
						// TODO: not working
						snackOk('Success');
					}}
				>
					On Click
				</Button>
			</S.Container.$>
		</S.Container.$>
	);
};
