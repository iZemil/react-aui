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

	return (
		<Container.$>
			<Avatar size={size} color="" />

			<Avatar size={size} color="red" />
			<Avatar size={size} color="green" />
			<Avatar size={size} color="blue" />

			<Avatar size={size} color="wrong" />
		</Container.$>
	);
};
