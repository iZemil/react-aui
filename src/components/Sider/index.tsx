import React, { useEffect } from 'react';

import Styled, { IStSiderProps } from './Styled';

export interface ISiderProps extends IStSiderProps {
	children: React.ReactNode;
	onClose: () => void;
}

export const Sider = ({ children, open, onClose, ...props }: ISiderProps) => {
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
		<Styled.$
			open={open}
			{...props}
			onClick={(e) => {
				const isWrapper = e.target === e.currentTarget;
				if (isWrapper) {
					onClose();
				}
			}}
		>
			<Styled.Content.$ open={open} {...props}>
				{children}
			</Styled.Content.$>
		</Styled.$>
	);
};
