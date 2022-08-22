import { IAUI, TSize } from '../../styles';

export type TButtonType = 'filled' | 'text' | 'dashed';

export type TButtonSize = TSize;

export interface ISButtonProps {
	$type?: TButtonType;
	size: TButtonSize;
	block: boolean;
	color: keyof IAUI['colors'];
	circle: boolean;
	disabled: boolean;
}

export interface IButtonProps extends Partial<ISButtonProps> {
	type?: TButtonType;
	disabled?: boolean;

	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
