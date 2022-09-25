import * as React from 'react';

import { Link } from '../Link';
import { Ripple } from '../Ripple';
import { useRipple } from '../Ripple/useRipple';

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

		to,
		blank = false,

		...rest
	} = props;

	const [ripple, handleRipple] = useRipple();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onClick) {
			onClick(event);
		}

		handleRipple(event);
	};

	const _Button = (
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

	if (to) {
		return (
			<Link to={to} blank={blank}>
				{_Button}
			</Link>
		);
	}

	return _Button;
}
