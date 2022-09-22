import styled from 'styled-components';

import { TSize, border, borderRadius, color as colorFn, disabledCss, getFontSize, padding } from '../../styles';

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
		$: styled.div``,
	},

	Input: {
		Wrapper: {
			$: styled.div`
				flex: 1;
				position: relative;
				display: flex;
				gap: ${padding('small')};
				align-items: center;
			`,
		},
		$: styled.input<ISInputProps>`
			background: ${colorFn('bg')};
			color: ${colorFn('text')};
			border-radius: ${borderRadius};
			padding: ${padding('medium')};
			outline: none;
			width: 100%;
			border: ${(props) => border(props.$error ? 'red' : 'grey')(props)};
			font-size: ${(props) => getFontSize(props.$size)}px;

			${({ type }) => type === 'password' && ``}

			${({ disabled }) => disabled && disabledCss()}
		`,
	},

	Label: {
		$: styled.label<{ error?: string; size: TSize }>`
			display: flex;
			align-items: center;
			gap: ${padding('small')};
			margin-bottom: ${padding('small')};
			line-height: ${(props) => getFontSize(props.size)}px;
			font-size: ${(props) => getFontSize(props.size) - 4}px;
			text-transform: uppercase;

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
