import styled from 'styled-components';

import { color, padding } from '../../styles';
import { Button } from '../Button';

const Styled = {
	$: styled(Button)<{ withChildren: boolean; isShort: boolean }>`
		height: ${({ withChildren }) => (withChildren ? 'auto' : '24px')};
		width: ${({ withChildren, isShort }) => (withChildren || isShort ? 'auto' : '62px')};
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: ${color('grey')};
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
			color: ${color('green')};
			flex: 1;
			gap: ${padding('small')};
			padding: ${padding('small')};
		`,
	},
};

export default Styled;
