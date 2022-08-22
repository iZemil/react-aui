import * as React from 'react';
import { useSelector } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { GlobalStyles, SnackbarsProvider } from '../components';

import { defaultTheme } from './consts';
import { IAUI } from './types';

interface IAUIProviderProps {
	theme?: IAUI;
	children: React.ReactNode;
}

export const AUIProvider = ({ children, theme = defaultTheme }: IAUIProviderProps) => {
	const lsTheme = useSelector((state: { aui: DefaultTheme }) => state.aui);

	return (
		<ThemeProvider theme={{ ...theme, ...lsTheme }}>
			<>
				{children}

				<SnackbarsProvider />

				<GlobalStyles />
			</>
		</ThemeProvider>
	);
};
