import styled from 'styled-components';

import { Link } from '../Link';
import { BORDER, PADDINGS, color } from '../../styles';

const Styled = {
	$: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${PADDINGS.Big};
		flex: 1;
	`,
	Title: {
		$: styled.div`
			font-size: 20px;
		`,
	},
	RedirectLink: {
		$: styled(Link)`
			font-size: 18px;
			border-radius: ${BORDER.radius};
			border: 2px solid;
			padding: ${PADDINGS.Medium} ${PADDINGS.Big};
		`,
	},
	Svg: {
		$: styled.svg`
			path {
				stroke: ${color('Main')};
				stroke-width: 3px;
			}
		`,
	},
};

export default Styled;
