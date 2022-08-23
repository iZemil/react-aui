import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAUI } from '../styles/types';

type TThemeState = Partial<IAUI>;

const initialState: TThemeState = {
	mode: 'dark',
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
