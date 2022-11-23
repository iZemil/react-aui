import { Title } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';
import { Icon } from '../Icon';

export default {
	component: Title,
};

export const Basic = () => {
	return (
		<Container column style={{ gap: 0 }}>
			<Title>Default Title is H1</Title>

			<Title h1>H1.React-AUI</Title>
			<Title h2>H2.React-AUI</Title>
			<Title h3>H3.React-AUI</Title>
			<Title h4>H4.React-AUI</Title>
			<Title h5>H5.React-AUI</Title>

			<Title color="orange">Colored</Title>
			<Title>
				<Icon size="small" icon={Icon.all.BsTypeH1} />
				Any content
				<Button.Copy value="Title" />
			</Title>
		</Container>
	);
};
