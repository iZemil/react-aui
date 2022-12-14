import styled from 'styled-components';

import { TColors, color, padding, toPx } from '../../styles';

export interface SProps {
	color: TColors;
	justifyContent: 'left' | 'right' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
	vertical: 'top' | 'bottom' | 'center';
	top: number;
	bottom: number;
	left: number;
	right: number;
}

export const S = {
	$: styled.h1<SProps>`
		display: flex;
		gap: ${padding('medium')};
		align-items: ${(props) => {
			const { vertical } = props;

			switch (vertical) {
				case 'top':
					return 'flex-start';
				case 'center':
					return 'center';
				case 'bottom':
					return 'flex-end';
				default:
					return 'center';
			}
		}};
		justify-content: ${(props) => props.justifyContent};
		margin: 0;
		padding: ${({ top, bottom, left, right }) => `${toPx(top)} ${toPx(right)} ${toPx(bottom)} ${toPx(left)}`};
		color: ${(props) => color(props.color)(props)};
		line-height: 1.4;
	`,
};
