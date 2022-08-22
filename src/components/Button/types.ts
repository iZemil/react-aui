import { ITheme } from '../../styles';

export type TButtonType = 'filled' | 'text' | 'dashed'; // | 'link';

export type TButtonSize = 'small' | 'medium' | 'large';

export interface ISButtonProps {
	_type?: TButtonType;
	size: TButtonSize;
	block: boolean;
	color: keyof ITheme['colors'];
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
