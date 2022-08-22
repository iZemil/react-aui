import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { EThemeMode, IAUI } from '../styles/types';

type TThemeState = Partial<IAUI>;

const initialState: TThemeState = {
	mode: EThemeMode.DARK,
};

export const themeSlice = createSlice({
	name: 'aui',
	initialState,
	reducers: {
		setTheme: (state, { payload: { mode } }: PayloadAction<{ mode: TThemeState['mode'] }>) => {
			state.mode = mode;
		},
	},
});

export const themeActions = themeSlice.actions;
