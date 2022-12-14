import * as React from 'react';

import { darkTheme, lightTheme } from '../styles';
import { useColor, useTheme } from '../utils';

import { AUIProvider } from './AUIProvider';
import { Button } from './Button';
import Container from './Container';
import { Divider } from './Divider';
import { Text } from './Text';
import { Title } from './Title';

export default {
	component: <div />,
};

export const Basic = () => {
	const { theme, setTheme } = useTheme();
	const mainColor = useColor('main');

	return (
		<Container column>
			<Container column>
				<Title h2>Example usage of useTheme hook</Title>
				<Title h3>
					Current Theme:{' '}
					<Text bold style={{ background: mainColor }}>
						{theme.key}
					</Text>
				</Title>
			</Container>

			<Container>
				<Button
					type="filled"
					onClick={() => {
						setTheme(lightTheme);
					}}
				>
					{lightTheme.key}
				</Button>

				<Button
					onClick={() => {
						setTheme(darkTheme);
					}}
				>
					{darkTheme.key}
				</Button>

				<Button
					type="dashed"
					onClick={() => {
						setTheme({
							...lightTheme,
							key: 'custom',
							colors: {
								...lightTheme.colors,
								main: '#ff0057',
								bg: '#033bab',
							},
							borderRadius: 12,
						});
					}}
				>
					custom
				</Button>
			</Container>

			<Divider dashed />

			<AUIProvider theme={{ ...lightTheme, key: 'some', colors: { ...lightTheme.colors, main: '#2196f3' } }}>
				<Button>Some other theme inside provider</Button>
			</AUIProvider>
		</Container>
	);
};
