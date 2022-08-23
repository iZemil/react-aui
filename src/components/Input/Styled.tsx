import styled from 'styled-components';

import { TSize, borderRadius, color as colorFn, disabledCss, padding, setSize } from '../../styles';

import { ISInputProps } from './types';

const activeLabelCss = `
	padding: 0;
	transform: translateY(-100%);
	top: 0;
`;

const Styled = {
	Wrapper: {
		$: styled.div`
			position: relative;
			display: flex;
			width: 100%;
			flex-direction: column;
		`,
	},

	Input: {
		$: styled.input<ISInputProps>`
			background: ${colorFn('bg')};
			color: ${colorFn('white')};
			border-radius: ${borderRadius};
			padding: ${padding('medium')};
			outline: none;

			border: 2px solid ${(props) => colorFn(props.$error ? 'red' : 'grey')(props)};

			${(props) => setSize({ ...props, size: props.$size })}

			${({ type }) => type === 'password' && ``}

			${({ disabled }) => disabled && disabledCss()}

			&:focus {
				& + label {
					${activeLabelCss}
				}
			}
		`,
	},

	Label: {
		$: styled.label<{ error?: string; size: TSize; active: boolean }>`
			pointer-events: none;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			gap: ${padding('small')};
			transition: 0.15s;
			${setSize}

			${(props) => props.active && activeLabelCss}

			color: ${(props) => (props.error ? colorFn('red')(props) : colorFn('grey')(props))};
		`,
	},

	Error: {
		$: styled.span`
			text-transform: none;
			font-size: 14px;
			color: ${colorFn('red')};
		`,
	},
};

export default Styled;
