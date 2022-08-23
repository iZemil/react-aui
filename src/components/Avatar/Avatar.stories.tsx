import { Avatar } from '.';
import * as React from 'react';

import { getFontSize } from '../../styles';
import Container from '../Container';

export default {
	component: Avatar,
};

export const Basic = () => {
	return (
		<Container.$ column>
			<Avatar />

			<Avatar user={{ name: 'zemil', id: 777 }} withName />

			<Avatar user={{ name: 'link', id: 777 }} withName link="/?path=/story/button-backbutton--basic" />
		</Container.$>
	);
};

export const Size = () => {
	return (
		<Container.$>
			<Avatar size={getFontSize('small')} />
			<Avatar size={getFontSize('medium')} />
			<Avatar size={getFontSize('large')} />
			<Avatar size={20} />
			<Avatar size={50} />
		</Container.$>
	);
};

export const Color = () => {
	const size = 20;
	const user = { name: 'aui', id: 1 };

	return (
		<Container.$ column>
			<Container.$>
				<Avatar size={size} color="" />

				<Avatar size={size} color="red" />
				<Avatar size={size} color="green" />
				<Avatar size={size} color="blue" />

				<Avatar size={size} color="#fff" />

				<Avatar size={size} color="wrong" />
			</Container.$>

			<Container.$>
				<Avatar user={user} size={size} color="" />

				<Avatar user={user} size={size} color="red" />
				<Avatar user={user} size={size} color="green" />
				<Avatar user={user} size={size} color="blue" />

				<Avatar user={user} size={size} color="#ff0" />

				<Avatar user={user} size={size} color="wrong" />
			</Container.$>
		</Container.$>
	);
};
