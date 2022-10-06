import styled from 'styled-components';

import { color } from '../../styles';

export interface SSiderProps {
	open: boolean;
	width: string | number;
	position: 'left' | 'right';
}

const Styled = {
	$: styled.div<SSiderProps>`
		position: fixed;
		top: 0;
		${({ position }) => position}: 0;
		transform: ${({ position }) => `translateX(${position === 'left' ? '-100%' : '100%'})`};
		width: 90%;
		max-width: ${({ width = 320 }) => `${width}${typeof width === 'number' ? 'px' : ''}`};
		height: 100%;
		background: ${color('bg')};
		transition: 0.3s ease-in-out;
		z-index: 9;
		visibility: hidden;
		overflow: hidden;

		${({ open }) =>
			open &&
			`
			visibility: visible;
			transform: translateX(0);
		`}
	`,
};

export default Styled;
