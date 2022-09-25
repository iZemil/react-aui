import * as React from 'react';
import styled from 'styled-components';

import { color } from '../../styles';

export interface RippleMetaProps {
	x: number;
	y: number;
	time: number;
}

const SIZE = 10;
const S = {
	$: styled.div<RippleMetaProps>`
		position: absolute;
		top: ${(props) => props.y - SIZE / 2}px;
		left: ${(props) => props.x - SIZE / 2}px;
		width: ${SIZE}px;
		height: ${SIZE}px;
		background: ${(props) => color('white')(props)}50;
		border-radius: 50%;
		z-index: 1;
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
	meta: RippleMetaProps | undefined;
	style?: React.CSSProperties;
}

export const Ripple = (props: RippleProps) => {
	const { meta, ...rest } = props;

	return (
		<S.Wrapper.$ {...rest} key={meta?.time}>
			{meta ? <S.$ {...meta} /> : null}
		</S.Wrapper.$>
	);
};
