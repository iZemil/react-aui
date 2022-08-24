import { SIZES, THEMES } from './consts';

type ValueOf<T> = T[keyof T];

export type TSize = ValueOf<typeof SIZES>;

export type TTheme = ValueOf<typeof THEMES>;

declare module 'styled-components' {
	export interface DefaultTheme extends IAUI {
		empty?: never;
	}
}

export interface IAUIColors {
	main: string;
	text: string;

	white: string;
	black: string;

	red: string;
	green: string;
	blue: string;
	orange: string;
	grey: string;

	bg: string;
	wrapper: string;
}

export type TAUIColors = keyof IAUIColors;

export type TPaddings = Record<TSize, number>;

export interface IAUI {
	mode: TTheme;
	colors: IAUIColors;
	borderRadius: number;
	paddings: TPaddings;
	globalStyles?: string;
}
