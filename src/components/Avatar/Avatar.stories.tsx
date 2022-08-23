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

export const Sizes = () => {
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
