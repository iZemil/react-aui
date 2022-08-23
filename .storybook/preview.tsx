import { configureStore } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { IAUI } from '../src';
import { AUIProvider } from '../src/styles/AUIProvider';
import { defaultTheme } from '../src/styles/consts';

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'AUI provider themes',
		defaultValue: 'dark',
		toolbar: {
			// The icon for the toolbar item
			icon: 'circlehollow',
			// Array of options
			items: [
				{ value: 'dark', icon: 'circle', title: 'dark' },
				{ value: 'light', icon: 'circlehollow', title: 'light' },
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

const darkTheme: IAUI = defaultTheme;
const lightTheme: IAUI = {
	...defaultTheme,
	mode: 'light',
	colors: {
		...defaultTheme.colors,
		bg: '#5d6c6c',
		text: '#121E14',
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
