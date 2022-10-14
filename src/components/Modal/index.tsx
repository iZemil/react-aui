import * as React from 'react';

import { Overlay } from '../Overlay';

import S from './Styled';
import { ModalProps } from './types';

export const Modal = ({ children, open = false, size, onClose, closeButton, ...rest }: ModalProps) => {
	return (
		<>
			<Overlay open={open} onClose={onClose} />

			<S.$
				open={open}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<S.Content.$ size={size} {...rest}>
					{children}
				</S.Content.$>
			</S.$>

			{open && closeButton && (
				<S.Close.$
					type="text"
					icon
					color="grey"
					size="large"
					onClick={() => {
						if (onClose) {
							onClose();
						}
					}}
				>
					<span />
				</S.Close.$>
			)}
		</>
	);
};
