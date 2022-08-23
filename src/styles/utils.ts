import { IAUI, TAUIColors, TPaddings, TSize } from './types';

// GOOD: https://dev.to/j3nnning/theme-setup-with-styled-components-functional-programming-4i5p
export const color =
	(key: TAUIColors) =>
	(props: { theme: IAUI }): string =>
		props.theme.colors[key];

export const overflowedText = () => `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const disabledCss = (extraCss = '') => `
    opacity: 0.5;
    pointer-events: none;
    ${extraCss}
`;

export const inputLabelCss = (props: { theme: IAUI }) => `
    color: ${color('grey')(props)};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    cursor: default;
`;

const toPx = (value: number): string => `${value}px`;

export const borderRadius = (props: { theme: IAUI }): string => `${toPx(props.theme.borderRadius)}`;

export const padding =
	(size: TSize) =>
	(props: { theme: IAUI }): string =>
		`${toPx(props.theme.paddings[size])}`;

export const selectPaddings = (props: { theme: IAUI }): Record<TSize, string> => {
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

export const setSize = (props: { theme: IAUI; size: TSize }) => {
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
