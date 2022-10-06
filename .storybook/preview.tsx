import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AUIProvider } from '../src/components';
import { darkTheme, lightTheme } from '../src/styles/consts';

export const globalTypes = {
	theme: {
		description: 'AUI provider themes',
		defaultValue: 'dark',
		toolbar: {
			title: 'theme',
			// The icon for the toolbar item
			icon: 'circlehollow',
			// Array of options
			items: [
				{ value: 'dark', icon: 'circle', title: 'dark' },
				{ value: 'light', icon: 'circlehollow', title: 'light' },
			],
		},
	},
};

// GOOD: find color by color https://mycolor.space/
// find: https://app.contrast-finder.org/
const withAUIProvider: DecoratorFn = (Story, context) => {
	const theme = context.parameters.theme || context.globals.theme;

	return (
		<BrowserRouter>
			<AUIProvider themes={[lightTheme, darkTheme]} active={theme === 'light' ? 0 : 1}>
				<Story />
			</AUIProvider>
		</BrowserRouter>
	);
};

export const decorators = [withAUIProvider];
