import { TSize } from '../../styles';

export interface SModalProps {
	size?: TSize;
}

export interface ModalProps extends Partial<SModalProps> {
	title?: React.ReactNode;
	toolbar?: React.ReactNode;
	children?: React.ReactNode;
	content?: React.ReactNode;
	onClose?: () => void;
	closeButton?: boolean;
	open?: boolean;
}
