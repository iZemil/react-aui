import styled from 'styled-components';

import { borderRadius, color, padding } from '../../styles';
import { Link } from '../Link';

const Styled = {
	$: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${padding('large')};
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
			border-radius: ${borderRadius};
			border: 2px solid;
			padding: ${padding('medium')} ${padding('large')};
		`,
	},
	Svg: {
		$: styled.svg`
			path {
				stroke: ${color('main')};
				stroke-width: 3px;
			}
		`,
	},
};

export default Styled;
