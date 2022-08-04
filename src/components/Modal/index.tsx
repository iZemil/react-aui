import { BsXLg as CloseIcon } from 'react-icons/bs';

import Styled, { IStModalProps } from './Styled';

export enum EModal {
	MEDIUM = 'MEDIUM',
}

export interface IModalProps extends IStModalProps {
	children: React.ReactNode;
	onClose: () => void;
	kind?: EModal;
	withCloseBtn?: boolean;
}

export const Modal = ({ children, open, onClose, withCloseBtn, ...rest }: IModalProps) => {
	return (
		<Styled.$
			open={open}
			onClick={(e) => {
				const isWrapper = e.target === e.currentTarget;
				if (isWrapper) {
					onClose();
				}
			}}
		>
			<Styled.Content.$ {...rest}>{children}</Styled.Content.$>

			{withCloseBtn && (
				<Styled.Close.$
					onClick={() => {
						onClose();
					}}
				>
					<CloseIcon />
				</Styled.Close.$>
			)}
		</Styled.$>
	);
};
