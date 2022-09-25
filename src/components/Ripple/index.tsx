import * as React from 'react';
import styled from 'styled-components';

import { color } from '../../styles';

export interface Coords {
	x: number;
	y: number;
}

const S = {
	$: styled.div<Coords>`
		position: absolute;
		top: ${(props) => props.y}px;
		left: ${(props) => props.x}px;
		width: 10px;
		height: 10px;
		background: ${(props) => color('white')(props)}50;
		border-radius: 50%;
		z-index: -1;
		animation: 0.6s ease 1 forwards ripple-effect;

		@keyframes ripple-effect {
			0% {
				transform: scale(1);
				opacity: 1;
			}
			100% {
				transform: scale(35);
				opacity: 0;
			}
		}
	`,
	Wrapper: {
		$: styled.div`
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			pointer-events: none;
		`,
	},
};

export interface RippleProps {
	coords: Coords | undefined;
	style?: React.CSSProperties;
}

export const Ripple = (props: RippleProps) => {
	const { coords, ...rest } = props;

	return <S.Wrapper.$ {...rest}>{coords && <S.$ x={coords.x} y={coords.y} />}</S.Wrapper.$>;
};
