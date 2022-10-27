import { Avatar } from '.';
import * as React from 'react';

import { getFontSize } from '../../styles';
import Container from '../Container';

export default {
	component: Avatar,
};

const username = 'aui';
const src = 'https://mui.com/static/images/avatar/1.jpg';

export const Basic = () => {
	return (
		<Container column>
			<Avatar />

			<Avatar square />

			<Avatar src={src}>One</Avatar>

			<Avatar src="https://wrong.address.or.not.found.jpg" />

			<Avatar>{username}</Avatar>
		</Container>
	);
};

export const Size = () => {
	const username = 'aui';

	return (
		<Container column>
			<Container>
				<Avatar size={getFontSize('large')} />
				<Avatar />
				<Avatar size={50} />
			</Container>

			<Container column>
				<Avatar size={getFontSize('large')} src={src}>
					{username}
				</Avatar>
				<Avatar src={src}>{username}</Avatar>
				<Avatar size={50} src={src}>
					{username}
				</Avatar>
			</Container>

			<Container column>
				<Avatar size={getFontSize('large')}>{username}</Avatar>
				<Avatar>{username}</Avatar>
				<Avatar size={50}>{username}</Avatar>
			</Container>
		</Container>
	);
};

export const Color = () => {
	const size = 20;

	return (
		<Container column>
			<Container>
				<Avatar size={size} color="" />

				<Avatar size={size} color="red" />
				<Avatar size={size} color="green" />
				<Avatar size={size} color="blue" />

				<Avatar size={size} color="#fff" />

				<Avatar size={size} color="wrong" />
			</Container>

			<Container>
				<Avatar />

				<Avatar color="red" />
				<Avatar color="green" />
				<Avatar color="blue" />

				<Avatar color="#ff0" />

				<Avatar color="wrong" />
			</Container>
		</Container>
	);
};
