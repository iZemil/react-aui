import styled from 'styled-components';

import { BORDER, PADDINGS, color } from '../../styles';

import { EModal } from '.';

export interface IStModalProps {
	open: boolean;
}

const Styled = {
	$: styled.div<IStModalProps>`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${color('BgWrapper')};
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;

		${(props) =>
			props.open
				? ``
				: `
		display: none;
		pointer-events: none;`}
	`,
	Content: {
		$: styled.div<{ kind?: EModal }>`
			position: relative;
			margin: ${PADDINGS.Medium};
			width: 100%;
			height: auto;
			padding: ${PADDINGS.Medium};
			background: ${color('Bg')};
			border-radius: ${BORDER.radius};

			${({ kind }) => {
				if (kind === EModal.MEDIUM) {
					return `
						max-width: 480px;
						display: flex;
						flex-direction: column;
						gap: ${PADDINGS.Medium};
						padding: ${PADDINGS.Big} ${PADDINGS.Medium};
					`;
				}

				return '';
			}}
		`,
	},
	Close: {
		$: styled.div`
			position: absolute;
			top: 0;
			right: 0;
			padding: ${PADDINGS.Big};
			font-size: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: ${color('Grey')};
			cursor: pointer;
		`,
	},
};

export default Styled;
