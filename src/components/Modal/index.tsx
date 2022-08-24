import * as React from 'react';
import { BsXLg as CloseIcon } from 'react-icons/bs';

import { Overlay } from '../Overlay';

import S from './Styled';
import { IModalProps } from './types';

export const Modal = ({ children, open = false, size, onClose, closeButton, ...rest }: IModalProps) => {
	return (
		<>
			<Overlay open={open} onClose={onClose} />

			{open && (
				<>
					<S.$
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<S.Content.$ size={size} {...rest}>
							{children}
						</S.Content.$>
					</S.$>

					{closeButton && (
						<S.Close.$
							type="text"
							onClick={() => {
								if (onClose) {
									onClose();
								}
							}}
						>
							<CloseIcon />
						</S.Close.$>
					)}
				</>
			)}
		</>
	);
};
