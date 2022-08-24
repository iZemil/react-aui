import { TSize } from '../../styles';

export interface ISModalProps {
	size?: TSize;
}

export interface IModalProps extends Partial<ISModalProps> {
	children: React.ReactNode;
	onClose?: () => void;
	closeButton?: boolean;
	open?: boolean;
}
