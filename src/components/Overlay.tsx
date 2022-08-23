import * as React from 'react';
import styled from 'styled-components';

import { color } from '../styles';

interface IProps {
	open: boolean;
	onClose: () => void;
}

const S = {
	$: styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${color('wrapper')};
		opacity: 0.66;
		z-index: 1;
	`,
};

export const Overlay = ({ open, onClose }: IProps) => {
	return open ? (
		<S.$
			onClick={(e) => {
				const isWrapper = e.target === e.currentTarget;
				if (isWrapper) {
					onClose();
				}
			}}
		/>
	) : null;
};
