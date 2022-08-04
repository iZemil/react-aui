import styled from 'styled-components';

import { BORDER, PADDINGS, color, disabledCss } from '../../styles';

export interface IStyledProps {
	$disabled?: boolean;
}

const Styled = {
	$: styled.div<IStyledProps>`
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: ${PADDINGS.Small};
		border-radius: ${BORDER.radius};

		${({ $disabled }) =>
			$disabled &&
			disabledCss(`
				background: ${color('Grey')};
			`)}
	`,
};

export default Styled;
