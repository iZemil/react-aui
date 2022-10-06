export type TSize = 'small' | 'medium' | 'large';

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
	mode: string;
	colors: IAUIColors;
	borderRadius: number;
	paddings: TPaddings;
	globalStyles?: string;
}
