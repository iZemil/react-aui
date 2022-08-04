declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {
		empty?: never;
	}
}

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

export * from './themeSlice';
