import styled from 'styled-components';

import { borderRadius, color, disabledCss, padding } from '../../styles';

export interface IStyledProps {
	$disabled?: boolean;
}

const Styled = {
	$: styled.div<IStyledProps>`
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: ${padding('small')};
		border-radius: ${borderRadius};

		${({ $disabled }) =>
			$disabled &&
			disabledCss(`
				background: ${color('grey')};
			`)}
	`,
};

export default Styled;
