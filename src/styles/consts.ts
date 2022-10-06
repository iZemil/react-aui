import { IAUI } from './types';

export const THEMES = { dark: 'dark', light: 'light' } as const;

export const lightTheme: IAUI = {
	mode: 'light',
	colors: {
		main: '#828bf6',
		text: '#000000',
		bg: '#ffffff',

		grey: '#c7c9cb',

		red: '#ed4245',
		green: '#3ba55d',
		blue: '#00a6ff',
		orange: '#ffbb33',

		black: '#000000',
		white: '#ffffff',
	},
	borderRadius: 4,
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
};

export const darkTheme: IAUI = {
	...lightTheme,
	mode: 'dark',
	colors: {
		...lightTheme.colors,
		bg: '#36393f',
		text: '#ffffff',
	},
};
