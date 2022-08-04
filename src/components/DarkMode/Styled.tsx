import styled from 'styled-components';

import { Icons } from '../icons';
import { PADDINGS } from '../../styles';

const Styled = {
	$: styled.button<{ $active: boolean }>`
		width: fit-content;
		border: 0;
		padding: 0;
		margin: 0;
		padding: ${PADDINGS.Medium};
		outline: 0;
		border-radius: 100px;
		cursor: pointer;
	`,
	Content: {
		$: styled.div`
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			font-size: 14px;
		`,
		Sun: {
			$: styled(Icons.Sun)`
				color: yellow;
			`,
		},
		Moon: {
			$: styled(Icons.Moon)`
				color: black;
			`,
		},
	},
};

export default Styled;
