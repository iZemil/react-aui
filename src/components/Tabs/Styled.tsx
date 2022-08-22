import styled from 'styled-components';

import { PADDINGS, borderRadius, color, inputLabelCss } from '../../styles';

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
			background: ${color('bg')};
			border-radius: ${borderRadius};
			border: 3px solid ${color('bg')};
			overflow-y: auto;
		`,
		Item: {
			$: styled.div<{ active?: boolean }>`
				padding: ${PADDINGS.Medium} ${PADDINGS.Big};
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
			border: 2px solid ${color('bg')};
			border-radius: ${borderRadius};
			padding: ${PADDINGS.Medium};
		`,
	},
};

export default Styled;
