import { configureStore } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import { Provider } from 'react-redux';
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
	const globalTheme = theme === 'dark' ? darkTheme : lightTheme;

	return (
		<BrowserRouter>
			<Provider
				store={configureStore({
					reducer: {},
				})}
			>
				<AUIProvider theme={globalTheme}>
					<Story />
				</AUIProvider>
			</Provider>
		</BrowserRouter>
	);
};

export const decorators = [withAUIProvider];
