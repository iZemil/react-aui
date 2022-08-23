import { Button } from '..';
import styled from 'styled-components';

import { color, padding } from '../../../styles';

const Styled = {
	$: styled(Button)<{ withChildren: boolean; isShort: boolean }>`
		width: fit-content;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: transparent;
		color: ${color('grey')};
		padding: ${padding('small')};
	`,

	Icon: {
		$: styled.div`
			display: flex;
			align-items: center;
			justify-content: center;
		`,
	},
};

export default Styled;
