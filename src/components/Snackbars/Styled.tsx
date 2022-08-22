import styled from 'styled-components';

import { padding } from '../../styles';

const Styled = {
	$: styled.div``,
	Actions: {
		$: styled.div``,
		Message: {
			$: styled.div``,
		},
		Tools: {
			$: styled.div`
				display: flex;
				gap: ${padding('medium')};
			`,
		},
	},
};

export default Styled;
