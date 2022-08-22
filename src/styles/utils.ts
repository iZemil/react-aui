import { DefaultTheme } from 'styled-components';

import { IAUI, TPaddings, TSize } from './types';

// GOOD: https://dev.to/j3nnning/theme-setup-with-styled-components-functional-programming-4i5p
export const color =
	(key: keyof IAUI['colors']) =>
	(props: { theme: DefaultTheme }): string =>
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

export const inputLabelCss = (props: any) => `
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
