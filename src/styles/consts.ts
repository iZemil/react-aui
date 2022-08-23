import { IAUI } from './types';

export const SIZES = { small: 'small', medium: 'medium', large: 'large' } as const;

export const THEMES = { dark: 'dark', light: 'light' } as const;

export const defaultTheme: IAUI = {
	mode: 'dark',
	colors: {
		main: '#00ff7f',
		text: '#ffffff',
		bg: '#232529',

		black: '#000000',
		white: '#ffffff',
		grey: '#888888',

		red: '#f6465d',
		green: '#0ecb81',
		blue: '#03a9f4',
		orange: '#c99400',

		wrapper: '#000000c9',
	},
	borderRadius: 4,
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
};
