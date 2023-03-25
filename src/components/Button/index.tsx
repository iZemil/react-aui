import * as React from 'react';

import { Ripple } from '../Ripple';
import { useRipple } from '../Ripple/useRipple';

import { Burger } from './Burger';
import { CopyButton } from './CopyButton';
import { S } from './Styled';
import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
	const {
		children,
		onClick,
		type,
		size = 'medium',
		block = false,
		color = 'main',
		circle = false,
		disabled = false,
		htmlType = 'button',
		icon = false,

		...rest
	} = props;

	const [ripple, handleRipple] = useRipple();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onClick) {
			onClick(event);
		}

		handleRipple(event);
	};

	return (
		<S.$
			$type={type}
			type={htmlType}
			onClick={handleClick}
			{...rest}
			size={size}
			block={block}
			color={color}
			circle={circle}
			icon={icon}
			disabled={disabled}
		>
			<Ripple meta={ripple} style={{ borderRadius: circle ? '50%' : undefined }} />

			{children}
		</S.$>
	);
}

Button.Copy = CopyButton;
// TODO: существует цикл зависимость Burget -> Button -> Burger
Button.Burger = Burger;
