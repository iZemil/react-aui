import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AUIProvider, GlobalStyles } from '../src/components';
import { ITheme } from '../src/styles';
import { darkTheme, lightTheme } from '../src/styles/consts';

export const globalTypes = {
	theme: {
		description: 'Themes',
		defaultValue: 'dark',
		toolbar: {
			title: 'theme',
			icon: 'circlehollow',
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
	const themeKey: ITheme['key'] = context.parameters.theme || context.globals.theme;

	const theme: ITheme = React.useMemo(() => {
		const themes = [lightTheme, darkTheme];

		return themes.find((t) => t.key === themeKey) ?? themes[0];
	}, [themeKey]);

	return (
		<BrowserRouter>
			<AUIProvider theme={theme}>
				<GlobalStyles />

				<Story />
			</AUIProvider>
		</BrowserRouter>
	);
};

export const decorators = [withAUIProvider];
