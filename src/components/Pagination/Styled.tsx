import styled from 'styled-components';

import { color, padding } from '../../styles';
import { Button } from '../Button';

export const S = {
	$: styled.div`
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: ${padding('medium')};
		padding: ${padding('large')} 0 ${padding('medium')};
	`,
	Item: {
		$: styled(Button).attrs({ color: 'white', type: 'text', icon: true })<{ active?: boolean }>`
			user-select: none;

			${(props) =>
				props.active &&
				`
				color: ${color('main')(props)};
				pointer-events: none;
				cursor: default;
			`}
		`,
	},
};
