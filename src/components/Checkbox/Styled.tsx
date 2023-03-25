import styled, { css } from 'styled-components';

import { border, borderRadius, clickEffect, color, disabledCss, padding } from '../../styles';

import { CheckboxProps } from './index';

export const SIZE = 18;

type TIconProps = Required<Pick<CheckboxProps, 'color'>>;
const Icon = {
	$: styled.div<TIconProps>`
		color: ${(p) => color(p.color)(p)};
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: 0.4s;

		${() => {
			const size = SIZE;

			return css`
				width: ${size}px;
				height: ${size}px;
				min-width: ${size}px;
			`;
		}}
		border-radius: ${borderRadius};
		border: ${(p) => border(p.color)(p)};

		${(props) => clickEffect.init(props)}
	`,
};
export const S = {
	$: styled.div<Partial<CheckboxProps> & TIconProps>`
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: ${padding('medium')};
		padding: ${padding('small')};
		border-radius: ${borderRadius};
		width: fit-content;
		user-select: none;
		line-height: 1;

		${({ disabled }) =>
			disabled &&
			disabledCss(`
				background: ${color('grey')};
			`)}

		&:active ${Icon.$} {
			${() => clickEffect.active()}
		}
	`,
	Icon,
};
