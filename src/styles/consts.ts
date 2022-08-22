import { EThemeMode, IAUI } from './types';

export const SIZES = { small: 'small', medium: 'medium', large: 'large' } as const;

// TODO: set validator, eg because color: blue is not valid
export const defaultTheme: IAUI = {
	mode: EThemeMode.DARK,
	colors: {
		main: '#00ff7f',
		red: '#f6465d',
		green: '#0ecb81',
		white: '#ffffff',
		grey: '#888888',
		black: '#000000',
		orange: '#c99400',
		blue: '#03a9f4',
		bg: '#232529',
		wrapper: '#000000c9',
	},
	borderRadius: 4,
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
};
