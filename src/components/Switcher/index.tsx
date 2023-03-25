import React from 'react';
import styled, { css } from 'styled-components';

import { TColors, color as colorFn, padding } from '../../styles';

const SIZE = 18;

interface SProps {
	disabled?: boolean;
	value?: boolean;
	color: TColors;
}
const S = {
	Wrapper: {
		$: styled.div<Partial<SProps>>`
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: ${padding('medium')}px;
			line-height: 1.4;
			cursor: pointer;
			user-select: none;

			${(p) =>
				p.disabled &&
				css`
					opacity: 0.8;
					pointer-events: none;
				`}
		`,
	},

	$: styled.div<SProps>`
		position: relative;
		margin: 0 ${padding('medium')}px;
		width: ${SIZE * 1.5}px;
		min-width: ${SIZE * 1.5}px;
		height: ${SIZE - 2}px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: ${colorFn('grey')};
		border-radius: 100px;
		cursor: pointer;

		&::before {
			content: '';
			position: absolute;
			width: ${SIZE}px;
			height: ${SIZE}px;
			background: ${colorFn('text')};
			border: 2px solid ${colorFn('grey')};
			border-radius: 50%;
			transform: translateX(-50%);
			transition: 0.2s;
		}

		${(p) =>
			p.value &&
			css`
				background: ${colorFn(p.color)(p)};

				&::before {
					border-color: ${colorFn(p.color)(p)};
					transform: translateX(50%);
				}
			`}
	`,
};

export type SwitcherProps = {
	children?: React.ReactNode;
	onChange?: (value: boolean) => void;
} & Partial<SProps>;
export const Switcher = (props: SwitcherProps) => {
	const { value, onChange, children, color = 'main', disabled, ...rest } = props;

	const handleClick = () => onChange && onChange(!value);

	return (
		<S.Wrapper.$ disabled={disabled} onClick={handleClick} {...rest}>
			{children}
			<S.$ value={value} color={color} />
		</S.Wrapper.$>
	);
};
