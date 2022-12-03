import { SnackbarsProvider } from '.';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { isValidColors } from '../styles';
import { IAUI } from '../styles/types';

import { OverlayProvider } from './overlay';

interface AUIProviderProps {
	themes: IAUI[];
	active?: number;
	children: React.ReactNode;
}

interface IAUIContext {
	active: number;
	themes: IAUI[];
}
const defaultAUIContext: IAUIContext = {
	active: 0,
	themes: [],
};
export const AUIContext = React.createContext<IAUIContext>(defaultAUIContext);

export const AUIProvider = ({ children, active = 0, themes }: AUIProviderProps) => {
	const [context, setContext] = React.useState<IAUIContext>({
		active,
		themes,
	});

	// validate theme color props
	React.useEffect(() => {
		context.themes.forEach((theme) => {
			isValidColors(theme);
		});
	}, []);

	React.useEffect(() => {
		setContext({
			...context,
			active,
		});
	}, [active]);

	const theme: IAUI = React.useMemo(() => context.themes[context.active], [context]);

	return (
		<ThemeProvider theme={theme}>
			<OverlayProvider>
				<>
					{children}
					<SnackbarsProvider />
				</>
			</OverlayProvider>
		</ThemeProvider>
	);
};
