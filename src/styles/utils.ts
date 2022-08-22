import { DefaultTheme } from 'styled-components';

import { IAUI } from './types';

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

export const borderRadius = (props: { theme: IAUI }) => `${props.theme.borderRadius}px`;
