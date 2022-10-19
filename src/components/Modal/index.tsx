import { Overlay } from '..';
import * as React from 'react';

import S from './Styled';
import { ModalProps } from './types';

export const Modal = ({ children, open = false, size, title = null, onClose, closeButton, ...rest }: ModalProps) => {
	return (
		<>
			<Overlay open={open} onClose={onClose} />

			<S.$
				open={open}
				onClick={(e) => {
					e.stopPropagation();
				}}
				size={size}
				{...rest}
			>
				{title}
				<S.Content.$>{children}</S.Content.$>
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

Modal.Title = S.Title.$;
