import styled from 'styled-components';

import { TColors, color, padding } from '../../styles';

export interface SProps {
	color: TColors;
}

export const S = {
	$: styled.h1<SProps>`
		display: flex;
		align-items: center;
		gap: ${padding('medium')};
		margin: 0;
		line-height: 1.4;

		color: ${(props) => color(props.color)(props)};
	`,
};
