import styled from 'styled-components';

import { borderRadius, clickEffect, color, disabledCss, padding } from '../../styles';

import { CheckboxProps } from './index';

type TIconProps = Required<Pick<CheckboxProps, 'color'>>;
const Icon = {
	$: styled.div<TIconProps>`
		color: ${(props) => color(props.color)(props)};
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: 0.4s;

		${(props) => clickEffect.init(props)}
	`,
};
const Styled = {
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

export default Styled;
