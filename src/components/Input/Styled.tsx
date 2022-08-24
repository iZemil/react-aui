import styled from 'styled-components';

import { TSize, borderRadius, color as colorFn, disabledCss, getFontSize, padding, setSize } from '../../styles';

import { ISInputProps } from './types';

const activeLabelCss = `
	font-size: ${getFontSize('small')}px;
	padding: 0;
	transform: translateY(-100%);
	top: 0;
	line-height: 1.2;
`;

const Styled = {
	Wrapper: {
		$: styled.div<{ marginTop: boolean }>`
			display: flex;
			width: 100%;
			flex-direction: row;
			gap: ${padding('medium')};
			align-items: center;

			${(props) =>
				props.marginTop &&
				`
				margin-top: ${getFontSize('small')}px;
			`}
		`,
	},

	Input: {
		Wrapper: {
			$: styled.div`
				flex: 1;
				position: relative;
			`,
		},
		$: styled.input<ISInputProps>`
			background: ${colorFn('bg')};
			color: ${colorFn('text')};
			border-radius: ${borderRadius};
			padding: ${padding('medium')};
			outline: none;
			width: 100%;

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
			color: ${colorFn('red')};
		`,
	},

	Prefix: {
		$: styled.div``,
	},
	Suffix: {
		$: styled.div``,
	},
};

export default Styled;
