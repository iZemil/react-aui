import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ITheme {
	mode?: EThemeMode;
	colors: IColors;
}

export type TThemeState = Partial<ITheme>;

export enum EThemeMode {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

export interface IColors {
	Main: string;
	Red: string;
	Green: string;
	White: string;
	Grey: string;
	DarkGrey: string;
	Black: string;
	Warn: string;
	Blue: string;

	Bg: string;
	BgWrapper: string;
}

const initialState: TThemeState = {
	mode: EThemeMode.DARK,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, { payload: { mode } }: PayloadAction<{ mode: TThemeState['mode'] }>) => {
			state.mode = mode;
		},
	},
});

export const themeActions = themeSlice.actions;
