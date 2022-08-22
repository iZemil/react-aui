import * as React from 'react';
import styled from 'styled-components';

import { PADDINGS, borderRadius, color as colorFn, disabledCss } from '../../styles';

import { IButtonProps, ISButtonProps } from './types';

const S = {
	$: styled.button<ISButtonProps>`
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${PADDINGS.Medium};
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

		${(props) => {
			const { size } = props;

			const small = `
				padding: ${PADDINGS.Small} ${PADDINGS.Medium};
				font-size: 14px;
			`;

			const medium = `
				padding: ${PADDINGS.Medium};
				font-size: 16px;
			`;

			const large = `
				padding: ${PADDINGS.Medium} ${PADDINGS.Big};
				font-size: 18px;
			`;

			switch (size) {
				case 'small':
					return small;

				case 'medium':
					return medium;

				case 'large':
					return large;

				default:
					return medium;
			}
		}}

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

// TODO: htmlType
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
		...rest
	} = props;

	return (
		<S.$
			type="button"
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
