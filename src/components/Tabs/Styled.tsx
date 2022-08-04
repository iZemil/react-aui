import styled from 'styled-components';

import { BORDER, PADDINGS, color, inputLabelCss } from '../../styles';

const Styled = {
	$: styled.div`
		display: flex;
		flex-direction: column;
		gap: ${PADDINGS.Small};
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
			background: ${color('Bg')};
			border-radius: ${BORDER.radius};
			border: 3px solid ${color('Bg')};
			overflow-y: auto;
		`,
		Item: {
			$: styled.div<{ active?: boolean }>`
				padding: ${PADDINGS.Medium} ${PADDINGS.Big};
				color: ${color('Grey')};
				border-radius: ${BORDER.radius};
				cursor: pointer;

				${(props) =>
					props.active &&
					`
					background: ${color('Bg')(props)};
					color: ${color('Main')(props)};
				`}
			`,
		},
	},
	Content: {
		$: styled.div`
			border: 2px solid ${color('Bg')};
			border-radius: ${BORDER.radius};
			padding: ${PADDINGS.Medium};
		`,
	},
};

export default Styled;
