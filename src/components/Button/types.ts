import { IAUI, TSize } from '../../styles';

export type TButtonType = 'filled' | 'text' | 'bordered' | 'dashed';

export interface SButtonProps {
	$type?: TButtonType;
	size: TSize;
	block: boolean;
	color: keyof IAUI['colors'];
	circle: boolean;
	disabled: boolean;
	icon: boolean;
}

export interface ButtonProps extends Partial<Omit<SButtonProps, '$type'>> {
	htmlType?: 'button' | 'submit';
	type?: TButtonType;
	disabled?: boolean;

	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

	to?: string;
	blank?: boolean;
}
