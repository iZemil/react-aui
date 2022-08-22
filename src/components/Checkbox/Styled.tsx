import styled from 'styled-components';

import { PADDINGS, borderRadius, color, disabledCss } from '../../styles';

export interface IStyledProps {
	$disabled?: boolean;
}

const Styled = {
	$: styled.div<IStyledProps>`
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: ${PADDINGS.Small};
		border-radius: ${borderRadius};

		${({ $disabled }) =>
			$disabled &&
			disabledCss(`
				background: ${color('grey')};
			`)}
	`,
};

export default Styled;
