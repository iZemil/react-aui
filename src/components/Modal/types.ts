import { TSize } from '../../styles';

export interface SModalProps {
	size?: TSize;
}

export interface ModalProps extends Partial<SModalProps> {
	children: React.ReactNode;
	onClose?: () => void;
	closeButton?: boolean;
	open?: boolean;
}
