import styled from 'styled-components';

import { Button } from '../Button';
import { PADDINGS, color } from '../../styles';

const Styled = {
	$: styled(Button)<{ withChildren: boolean; isShort: boolean }>`
		height: ${({ withChildren }) => (withChildren ? 'auto' : '24px')};
		width: ${({ withChildren, isShort }) => (withChildren || isShort ? 'auto' : '62px')};
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: ${color('Grey')};
		background: transparent;
		padding: 0;
	`,
	Icon: {
		$: styled.div`
			display: flex;
			align-items: center;
			justify-content: center;
		`,
	},
	CopiedText: {
		$: styled.div`
			display: flex;
			align-items: center;
			font-size: 14px;
			color: ${color('Green')};
			flex: 1;
			gap: ${PADDINGS.Small};
			padding: ${PADDINGS.Small};
		`,
	},
};

export default Styled;
