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

type MainButtonProps = {
	htmlType?: 'button' | 'submit';
	type?: TButtonType;
	disabled?: boolean;
	style?: React.CSSProperties;

	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

	title?: string;
	to?: string;
	blank?: boolean;
};

export type ButtonProps = Partial<Omit<SButtonProps, '$type'>> & MainButtonProps;
