import { Button } from '..';
import styled from 'styled-components';

import { color } from '../../../styles';

export const S = {
	$: styled(Button).attrs({ type: 'text', color: 'text', icon: true, circle: true })`
		width: 2.5rem !important;
		height: 2.5rem !important;
		outline: none !important;
		line-height: 1.2;
		flex-shrink: 0;
		overflow: hidden;
		text-decoration: none !important;
	`,
	Bar: {
		$: styled.div`
			width: 1.125rem;
			height: 0.125rem;
			border-radius: 0.125rem;
			background-color: ${color('text')};
			transition: transform 0.25s;
			transform: rotate(0);
			position: absolute;

			&::before,
			&::after {
				position: absolute;
				left: 0;
				content: '';
				width: 1.125rem;
				height: 0.125rem;
				border-radius: 0.125rem;
				background-color: ${color('text')};
				transition: transform 0.25s;
				transform: rotate(0);
			}

			&::before {
				top: -0.3125rem;
			}

			&::after {
				top: 0.3125rem;
			}
		`,
	},
};
