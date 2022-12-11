import { ButtonProps } from '../types';

import { S } from './Styled';

export type BurgerProps = Partial<Omit<ButtonProps, 'type' | 'color' | 'circle' | 'icon'>>;

export const Burger = ({ onClick, ...rest }: BurgerProps) => {
	return (
		<S.$ onClick={onClick} {...rest}>
			<S.Bar.$ />
		</S.$>
	);
};
