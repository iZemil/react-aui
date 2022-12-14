import { ITheme, TColors, TPaddings, TSize } from './types';

// GOOD: https://dev.to/j3nnning/theme-setup-with-styled-components-functional-programming-4i5p
export const color =
	(key: TColors) =>
	(props: { theme: ITheme }): string =>
		props.theme.colors[key];

export function checkColor(theme: ITheme, color?: TColors | string): color is TColors {
	if (!color) {
		return false;
	}

	return color in theme.colors;
}

export function getAnyColor(theme: ITheme, value?: TColors | string): string | undefined {
	if (!value) {
		return undefined;
	}

	return checkColor(theme, value) ? color(value)({ theme }) : value;
}

export const overflowedText = () => `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const disabledCss = (extraCss = '') => `
    opacity: 0.6;
    pointer-events: none;
    ${extraCss}
`;

export const inputLabelCss = (props: { theme: ITheme }) => `
    color: ${color('grey')(props)};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    cursor: default;
`;

export const toPx = (value: number): string => `${value}px`;

export const borderRadius = (props: { theme: ITheme }): string => `${toPx(props.theme.borderRadius)}`;

export const border =
	(c: TColors) =>
	(props: { theme: ITheme }): string =>
		`1px solid ${color(c)(props)}`;

export const padding =
	(size: TSize) =>
	(props: { theme: ITheme }): string =>
		`${toPx(props.theme.paddings[size])}`;

export const selectPaddings = (props: { theme: ITheme }): Record<TSize, string> => {
	const paddings: TPaddings = props.theme.paddings;

	return {
		small: toPx(paddings.small),
		medium: toPx(paddings.medium),
		large: toPx(paddings.large),
	};
};

export const getFontSize = (size?: TSize): number => {
	switch (size) {
		case 'small':
			return 14;

		case 'medium':
			return 16;

		case 'large':
			return 18;

		default:
			return 14;
	}
};

export const setSize = (props: { theme: ITheme; size: TSize }) => {
	const { size } = props;
	const paddings = selectPaddings(props);

	const fontSize = `
		font-size: ${toPx(getFontSize(size))};
	`;

	const small = `
		padding: ${paddings.small} ${paddings.medium};
	`;

	const medium = `
		padding: ${paddings.medium};
	`;

	const large = `
		padding: ${paddings.medium} ${paddings.large};
	`;

	switch (size) {
		case 'small':
			return small + fontSize;

		case 'medium':
			return medium + fontSize;

		case 'large':
			return large + fontSize;

		default:
			return medium + fontSize;
	}
};

export const isValidColors = (theme: ITheme): boolean => {
	const invalid: string[] = [];

	Object.entries(theme.colors).forEach(([name, color]) => {
		if (!CSS.supports('color', color)) {
			invalid.push(name);
			console.warn(`invalid color: ${name}: ${color} --> use six length format: #0f0f0f`);
		}
	});

	return invalid.length === 0;
};

export const clickEffect = {
	init: (props: { theme: ITheme; color: TColors }, options?: { borderRadius: string }) => `
		&::after {
			content: '';
			display: block;
			position: absolute;
			border-radius: ${options?.borderRadius ?? borderRadius(props)};
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			box-shadow: 0 0 10px 5px ${color(props.color)(props)};
			opacity: 0;
			transition: 0.5s;
			pointer-events: none;
		}
	`,
	active: () => `
		&::after {
			box-shadow: 0 0 0 0;
			opacity: 0.8;
			transition: 0s;
		}
	`,
};

export const cssIf = (value: string, condition = false) => (condition ? value : '');
