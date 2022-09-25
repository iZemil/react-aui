import styled from 'styled-components';

import {
	border as borderFn,
	borderRadius,
	clickEffect,
	color as colorFn,
	disabledCss,
	getFontSize,
	padding,
	setSize,
} from '../../styles';

import { SButtonProps } from './types';

export const S = {
	$: styled.button<SButtonProps>`
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${padding('medium')};
		border-radius: ${borderRadius};
		outline: 0;
		cursor: pointer;
		user-select: none;

		${(props) => {
			const { $type } = props;

			const color = colorFn(props.color)(props);

			const filled = `
				border: ${borderFn(props.color)(props)};
				background: ${color};
				color: ${colorFn('black')(props)};

				&:hover {
					opacity: .8;
				}
			`;

			const border = `
				border: ${borderFn(props.color)(props)};
				background: transparent;
				color: ${color};

				&:hover {
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

		${(props) =>
			props.icon &&
			`
				padding: ${padding(props.size)(props)};
				border-width: 1px;

				svg {
					width: ${getFontSize(props.size) + 2}px;
					height: ${getFontSize(props.size) + 2}px;
				}
		`}

		${({ block }) => block && `width: 100%;`}

		${({ circle }) =>
			circle &&
			`
			border-radius: 50%;
			width: fit-content;
		`}

		${(props) => {
			const options = props.circle ? { borderRadius: '50%' } : undefined;

			return clickEffect.init(props, options);
		}}

		&:active {
			${() => clickEffect.active()}
		}

		${({ disabled }) => disabled && disabledCss(``)}
	`,
};
