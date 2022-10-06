import { GlobalStyles, SnackbarsProvider } from '.';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { darkTheme } from '../styles/consts';
import { IAUI, IAUIColors, TPaddings, TTheme } from '../styles/types';
import { isValidColors } from '../styles/utils';

import { OverlayProvider } from './Overlay';

interface IAUIProviderProps {
	theme?: Partial<
		{ borderRadius: number; mode: TTheme; globalStyles: string } & { colors: Partial<IAUIColors> } & {
			paddings: Partial<TPaddings>;
		}
	>;
	children: React.ReactNode;
}

export const AUIProvider = ({ children, theme = {} }: IAUIProviderProps) => {
	// TODO: may work incorect without redux-persist
	const lsTheme = useSelector((state: { aui: DefaultTheme }) => state.aui);

	const auiTheme: IAUI = {
		mode: lsTheme?.mode ?? theme?.mode ?? darkTheme.mode,
		borderRadius: theme?.borderRadius ?? darkTheme.borderRadius,
		colors: { ...darkTheme.colors, ...theme.colors },
		paddings: { ...darkTheme.paddings, ...theme.paddings },
		globalStyles: theme.globalStyles,
	};

	React.useEffect(() => {
		isValidColors(auiTheme);
	}, []);

	return (
		<ThemeProvider theme={auiTheme}>
			<OverlayProvider>
				<>
					{children}
					<SnackbarsProvider />
					<GlobalStyles />
				</>
			</OverlayProvider>
		</ThemeProvider>
	);
};
