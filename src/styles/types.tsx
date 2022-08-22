import { SIZES } from './consts';

type ValueOf<T> = T[keyof T];

export type TSize = ValueOf<typeof SIZES>;

export enum EThemeMode {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

declare module 'styled-components' {
	export interface DefaultTheme extends IAUI {
		empty?: never;
	}
}

interface IAUIColors {
	main: string;
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

export type TPaddings = Record<TSize, number>;

export interface IAUI {
	mode?: EThemeMode;
	colors: IAUIColors;
	borderRadius: number;
	paddings: TPaddings;
}
