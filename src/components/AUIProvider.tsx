import { SnackbarsProvider } from '.';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, isValidColors } from '../styles';
import { ITheme } from '../styles/types';

import { OverlayProvider } from './overlay';

interface IAUIContext {
	theme: ITheme;
	setTheme: (theme: ITheme) => void;
}
const defaultContext: IAUIContext = {
	theme: darkTheme,
	setTheme: () => {
		return;
	},
};

interface AUIProviderProps {
	children: React.ReactNode;
	theme: ITheme;
}

export const AUIContext = React.createContext<IAUIContext>(defaultContext);

export const AUIProvider = (props: AUIProviderProps) => {
	const { children } = props;
	const [context, updateContext] = React.useState<IAUIContext>({ ...defaultContext, theme: props.theme });

	React.useEffect(() => {
		updateContext({
			...context,
			theme: props.theme,
		});
	}, [props.theme]);

	React.useEffect(() => {
		// validate theme color props
		isValidColors(context.theme);
	}, [context.theme]);

	const setTheme = React.useCallback(
		(t: ITheme) => {
			updateContext({
				...context,
				theme: t,
			});
		},
		[context, updateContext]
	);

	const contextData: IAUIContext = React.useMemo(
		() => ({
			...context,
			setTheme,
		}),
		[context, setTheme]
	);

	return (
		<AUIContext.Provider value={contextData}>
			<ThemeProvider theme={context.theme}>
				<OverlayProvider>
					{children}

					<SnackbarsProvider />
				</OverlayProvider>
			</ThemeProvider>
		</AUIContext.Provider>
	);
};
