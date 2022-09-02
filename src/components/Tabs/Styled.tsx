import styled from 'styled-components';

import { borderRadius, color, inputLabelCss, padding } from '../../styles';
import { Button } from '../Button';

const Styled = {
	$: styled.div`
		display: flex;
		flex-direction: column;
		gap: ${padding('small')};
	`,
	Title: {
		$: styled.div`
			${inputLabelCss}
		`,
	},
	Head: {
		$: styled.div`
			display: flex;
			align-items: center;
			font-size: 14px;
			height: 42px;
		`,
	},
	Tabs: {
		$: styled.div`
			display: flex;
			align-items: center;
			background: ${color('bg')};
			border-radius: ${borderRadius};
			border: 3px solid ${color('bg')};
			overflow-y: auto;
		`,
		Button: {
			$: styled(Button)<{ active: boolean }>`
				padding: ${padding('medium')} ${padding('large')};
				color: ${color('grey')};
				border-radius: ${borderRadius};
				cursor: pointer;

				${(props) =>
					props.active &&
					`
					background: ${color('bg')(props)};
					color: ${color('main')(props)};
				`}
			`,
		},
	},
	Content: {
		$: styled.div`
			border-radius: ${borderRadius};
		`,
	},
};

export default Styled;
