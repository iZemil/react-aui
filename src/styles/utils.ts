import { color } from './colors';

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
    color: ${color('Grey')(props)};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    cursor: default;
`;
