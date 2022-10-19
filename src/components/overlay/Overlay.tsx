import * as React from 'react';
import styled from 'styled-components';

import { color } from '../../styles';

export interface OverlayProps {
	open: boolean;
	onClose?: () => void;
	children?: React.ReactElement;
}

const S = {
	$: styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${color('black')}80;
		z-index: 9;
	`,
};

export const Overlay = ({ open, children, onClose }: OverlayProps) => {
	return open ? (
		<S.$
			onClick={(e) => {
				const isWrapper = e.target === e.currentTarget;
				if (isWrapper && onClose) {
					onClose();
				}
			}}
		>
			{children}
		</S.$>
	) : null;
};
