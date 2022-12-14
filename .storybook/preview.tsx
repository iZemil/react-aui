import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AUIProvider, GlobalStyles } from '../src/components';
import { ITheme, color, cssIf } from '../src/styles';
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
				<GlobalStyles>
					{(t) => `
						${cssIf(
							`
						html {
							color-scheme: dark;
						}
					`,
							t.key === 'dark'
						)}

						body {
							transition: 0.3s background;
							font-family: Arial, sans-serif;
							background-color: ${color('bg')({ theme: t })};
							color: ${color('text')({ theme: t })};
						}
					`}
				</GlobalStyles>

				<Story />
			</AUIProvider>
		</BrowserRouter>
	);
};

export const decorators = [withAUIProvider];
