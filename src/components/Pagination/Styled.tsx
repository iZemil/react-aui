import styled from 'styled-components';

import { PADDINGS, borderRadius, color } from '../../styles';

const Styled = {
	$: styled.div`
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: ${PADDINGS.Medium};
		padding: ${PADDINGS.Big} 0 ${PADDINGS.Medium};
	`,
	Item: {
		$: styled.div<{ active?: boolean; disabled?: boolean }>`
			display: flex;
			align-items: center;
			justify-content: center;
			padding: ${PADDINGS.Medium};
			border-radius: ${borderRadius};
			width: 36px;
			font-size: 14px;
			user-select: none;
			cursor: pointer;

			${({ active }) =>
				active &&
				`
				color: ${color('main')};
				background: ${color('bg')};
				pointer-events: none;
				cursor: default;
			`}

			${(props) =>
				props.disabled &&
				`
				color: ${color('grey')(props)};
				pointer-events: none;
				cursor: default;
			`}
		`,
	},
};

export default Styled;
