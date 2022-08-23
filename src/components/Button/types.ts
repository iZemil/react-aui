import { IAUI, TSize } from '../../styles';

export type TButtonType = 'filled' | 'text' | 'dashed';

export interface ISButtonProps {
	$type?: TButtonType;
	size: TSize;
	block: boolean;
	color: keyof IAUI['colors'];
	circle: boolean;
	disabled: boolean;
}

export interface IButtonProps extends Partial<ISButtonProps> {
	htmlType?: 'button' | 'submit';
	type?: TButtonType;
	disabled?: boolean;

	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
