import { Overlay } from '..';

import S from './Styled';
import { ModalProps } from './types';

export const Modal = ({
	children,
	open = false,
	size,
	title = null,
	toolbar = null,
	content = null,
	onClose,
	closeButton,
	...rest
}: ModalProps) => {
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
				{content ?? <S.Content.$>{children}</S.Content.$>}
				{toolbar}
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

// TODO?: close button prop
Modal.Title = S.Title.$;
Modal.Content = S.Content.$;
Modal.Toolbar = S.Toolbar.$;
