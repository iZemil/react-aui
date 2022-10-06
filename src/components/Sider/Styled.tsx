import styled from 'styled-components';

import { color } from '../../styles';

export interface SSiderProps {
	open: boolean;
	width?: string | number;
	position?: 'left' | 'right';
}

const Styled = {
	$: styled.div<SSiderProps>`
		position: fixed;
		top: 0;
		${({ position = 'right' }) => position}: 0;
		width: 90%;
		max-width: ${({ width = 320 }) => `${width}${typeof width === 'number' ? 'px' : ''}`};
		height: 100%;
		background: ${color('bg')};
		transition: 0.3s;
		z-index: 9;

		transform: ${({ open }) => (open ? `none` : `translateX(100%)`)};
	`,
};

export default Styled;
