import styled from 'styled-components';

import { ITheme, TSize, border, borderRadius, color as colorFn, disabledCss, getFontSize, padding } from '../../styles';

import { InputProps } from './types';

export const commonInputValueCss = (props: { theme: ITheme; error?: string; disabled?: boolean; size?: TSize }) => `
	background: ${colorFn('bg')(props)};
	color: ${colorFn('text')(props)};
	border-radius: ${borderRadius(props)};
	padding: ${padding('medium')(props)};
	outline: none;
	width: 100%;
	border: ${border(props.error ? 'red' : 'grey')(props)};
	font-size: ${getFontSize(props.size)}px;

	${props.disabled ? disabledCss() : ''}
`;

export const S = {
	$: styled.div``,
	Label: {
		$: styled.label<{ error?: string; size?: TSize }>`
			display: flex;
			align-items: center;
			gap: ${padding('small')};
			margin-bottom: ${padding('small')};
			line-height: ${(props) => getFontSize(props.size)}px;
			font-size: ${(props) => getFontSize(props.size) - 4}px;
			font-weight: bold;
			text-transform: uppercase;

			color: ${(props) => (props.error ? colorFn('red')(props) : colorFn('text')(props))};
		`,
	},
	Error: {
		$: styled.span`
			text-transform: none;
			color: ${colorFn('red')};
		`,
	},

	Value: {
		Wrapper: {
			$: styled.div`
				flex: 1;
				position: relative;
				display: flex;
				gap: ${padding('small')};
				align-items: center;
			`,
		},
		$: styled.input<Partial<Omit<InputProps, 'onChange'>>>`
			${commonInputValueCss}

			${({ type }) => type === 'password' && ``}
		`,
	},

	Prefix: {
		$: styled.div``,
	},
	Suffix: {
		$: styled.div``,
	},
	Hint: {
		$: styled.div``,
	},
};
