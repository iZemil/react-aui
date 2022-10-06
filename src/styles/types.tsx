import { THEMES } from './consts';

type ValueOf<T> = T[keyof T];

export type TSize = 'small' | 'medium' | 'large';

export type TTheme = ValueOf<typeof THEMES>;

declare module 'styled-components' {
	export interface DefaultTheme extends IAUI {
		empty?: never;
	}
}

export interface IAUIColors {
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

export type TColors = keyof IAUIColors;

export type TPaddings = Record<TSize, number>;

export interface IAUI {
	mode: TTheme;
	colors: IAUIColors;
	borderRadius: number;
	paddings: TPaddings;
	globalStyles?: string;
}
