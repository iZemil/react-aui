import { SIZES } from './consts';

declare module 'styled-components' {
	export interface DefaultTheme extends IAUI {
		empty?: never;
	}
}

export enum EThemeMode {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

export interface IAUIColors {
	main: string;
	red: string;
	green: string;
	blue: string;
	orange: string;
	white: string;
	black: string;
	grey: string;

	bg: string;
	wrapper: string;
}

type ValueOf<T> = T[keyof T];

export type TSize = ValueOf<typeof SIZES>;

export interface IAUI {
	mode?: EThemeMode;
	colors: IAUIColors;
	borderRadius: number;
}
