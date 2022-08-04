import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';

const themes = [
	{
		mode: 'DARK',
		colors: {
			Main: '#dd0000',
			Red: '#f6465d',
			Green: '#0ecb81',
			White: '#ffffff',
			Grey: '#888888',
			DarkGrey: '#424242',
			Black: '#000',
			Warn: '#c99400',
			Blue: '#03a9f4',
			Bg: '#232529',
			BgWrapper: '#000000c9',
		},
	},
];

export const parameters = {
	backgrounds: {
		default: 'DARK',
		values: [
			{
				name: 'DARK',
				value: '#232529',
			},
			{
				name: 'LIGHT',
				value: '#ffffff',
			},
		],
	},
};

addDecorator(withThemesProvider(themes), ThemeProvider);
