import { Button } from '..';
import styled from 'styled-components';

import { padding } from '../../../styles';

const Styled = {
	$: styled(Button)`
		width: fit-content;
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
