import * as React from 'react';

import { Link } from '../Link';

import { S } from './Styled';
import { IButtonProps } from './types';

export function Button(props: IButtonProps) {
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

	const _Button = (
		<S.$
			$type={type}
			type={htmlType}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				if (onClick) {
					onClick(event);
				}
			}}
			{...rest}
			size={size}
			block={block}
			color={color}
			circle={circle}
			icon={icon}
			disabled={disabled}
		>
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