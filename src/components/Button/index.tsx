import * as React from 'react';
import styled from 'styled-components';

import { borderRadius, color as colorFn, disabledCss, padding, setSize } from '../../styles';

import { IButtonProps, ISButtonProps } from './types';

const S = {
	$: styled.button<ISButtonProps>`
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${padding('medium')};
		border-radius: ${borderRadius};
		outline: 0;
		transition: background-color 0.3s, color 0.3s, opacity 0.3s;
		cursor: pointer;

		${(props) => {
			const { $type } = props;

			const color = colorFn(props.color)(props);

			const filled = `
				border: 2px solid ${color};
				background: ${color};
				color: ${colorFn('black')(props)};

				&:hover,
				&:focus,
				&:active {
					opacity: .8;
				}
			`;

			const border = `
				border: 2px solid ${color};
				background: transparent;
				color: ${color};

				&:hover,
				&:focus,
				&:active {
					background: ${color}20;
				}
			`;

			const dashed = `
				border-style: dashed;
			`;

			const text = `
				border-color: transparent;
			`;

			switch ($type) {
				case 'filled':
					return filled;

				case 'text':
					return border + text;

				case 'dashed':
					return border + dashed;

				default:
					return border;
			}
		}}

		${setSize}

		${({ block }) => block && `width: 100%;`}

		${({ circle }) =>
			circle &&
			`
			border-radius: 50%;
			width: fit-content;
		`}

		${({ disabled }) => disabled && disabledCss(``)}
	`,
};

// TODO: loading
// TODO: href, target
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
		...rest
	} = props;

	return (
		<S.$
			type={htmlType}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				event.preventDefault();

				if (onClick) {
					onClick(event);
				}
			}}
			{...rest}
			$type={type}
			size={size}
			block={block}
			color={color}
			circle={circle}
			disabled={disabled}
		>
			{children}
		</S.$>
	);
}
