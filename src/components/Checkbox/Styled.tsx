import styled from 'styled-components';

import { borderRadius, color, disabledCss, padding } from '../../styles';

import { CheckboxProps } from './index';

const Styled = {
	$: styled.div<Partial<CheckboxProps>>`
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
	`,
	Icon: {
		$: styled.div<Partial<CheckboxProps>>`
			display: flex;
			align-items: center;
			justify-content: center;

			${(props) =>
				props.color &&
				`
				color: ${color(props.color)(props)};
			`}
		`,
	},
};

export default Styled;
