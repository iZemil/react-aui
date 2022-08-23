import * as React from 'react';
import { useSelector } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { GlobalStyles, SnackbarsProvider } from '../components';

import { defaultTheme } from './consts';
import { EThemeMode, IAUI, IAUIColors, TPaddings } from './types';

interface IAUIProviderProps {
	theme?: Partial<
		{ borderRadius: number; mode: EThemeMode } & { colors: Partial<IAUIColors> } & { paddings: Partial<TPaddings> }
	>;
	children: React.ReactNode;
}

export const AUIProvider = ({ children, theme = {} }: IAUIProviderProps) => {
	// TODO: may work incorect without redux-persist
	const lsTheme = useSelector((state: { aui: DefaultTheme }) => state.aui);

	const auiTheme: IAUI = {
		mode: lsTheme?.mode ?? theme?.mode ?? defaultTheme.mode,
		borderRadius: theme?.borderRadius ?? defaultTheme.borderRadius,
		colors: { ...defaultTheme.colors, ...theme.colors },
		paddings: { ...defaultTheme.paddings, ...theme.paddings },
	};

	return (
		<ThemeProvider theme={auiTheme}>
			<>
				{children}

				<SnackbarsProvider />

				<GlobalStyles />
			</>
		</ThemeProvider>
	);
};
