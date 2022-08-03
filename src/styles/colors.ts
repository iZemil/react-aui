import { DefaultTheme } from 'styled-components';

import { ITheme } from '../theme';

// GOOD: https://dev.to/j3nnning/theme-setup-with-styled-components-functional-programming-4i5p
export const color =
	(key: keyof ITheme['colors']) =>
	(props: { theme: DefaultTheme }): string =>
		props.theme.colors[key];
