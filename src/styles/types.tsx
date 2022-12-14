export type TSize = 'small' | 'medium' | 'large';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {
		empty?: never;
	}
}

export interface IThemeColors {
	main: string;
	text: string;
	bg: string;

	white: string;
	black: string;

	red: string;
	green: string;
	blue: string;
	orange: string;
	grey: string;
}

export type TColors = keyof IThemeColors;

export type TPaddings = Record<TSize, number>;

export interface ITheme {
	key: string;
	colors: IThemeColors;
	borderRadius: number;
	paddings: TPaddings;
}
