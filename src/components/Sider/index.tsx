import React, { useEffect } from 'react';

import { Overlay } from '../Overlay';

import Styled, { SSiderProps } from './Styled';

export type SiderProps = SSiderProps & {
	children: React.ReactNode;
	onClose: () => void;
};

export const Sider = (props: SiderProps) => {
	const { children, open, width, onClose, ...rest } = props;

	useEffect(() => {
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [open]);

	return (
		<Overlay open={open} onClose={onClose}>
			<Styled.$ width={width} open={open} {...rest}>
				{children}
			</Styled.$>
		</Overlay>
	);
};
