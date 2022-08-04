import styled from 'styled-components';

import { PADDINGS } from '../../styles';

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
				gap: ${PADDINGS.Medium};
			`,
		},
	},
};

export default Styled;
