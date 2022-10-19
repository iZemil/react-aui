import { Overlay } from '..';
import React, { useEffect } from 'react';

import S, { SSiderProps } from './Styled';

export type SiderProps = Partial<SSiderProps> & {
	children: React.ReactNode;
	onClose: () => void;
};

export const Sider = (props: SiderProps) => {
	const { children, open = false, width = 320, onClose, position = 'right', ...rest } = props;

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
		<>
			<Overlay open={open} onClose={onClose} />

			<S.$ width={width} open={open} position={position} {...rest}>
				{children}
			</S.$>
		</>
	);
};
