import { useSelector } from 'react-redux';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';

interface IThemeProviderProps {
	children: React.ReactNode;
	defaultTheme: DefaultTheme;
}

export const ThemeProvider = ({ children, defaultTheme }: IThemeProviderProps) => {
	const theme = useSelector((state: { theme: DefaultTheme }) => state.theme);

	return <Provider theme={{ ...defaultTheme, ...theme }}>{children}</Provider>;
};
