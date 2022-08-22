import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { AUIProvider } from '../src/styles/AUIProvider';
import { defaultTheme } from '../src/styles/consts';

const themes = [defaultTheme];

// TODO: not working: https://storybook.js.org/docs/react/configure/theming
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

// @ts-ignore
addDecorator(withThemesProvider(themes), AUIProvider);
