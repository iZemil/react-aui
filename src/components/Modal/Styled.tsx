import { EModal } from '.';
import styled from 'styled-components';

import { borderRadius, color, padding, selectPaddings } from '../../styles';

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
		background: ${color('wrapper')};
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
			margin: ${padding('medium')};
			width: 100%;
			height: auto;
			padding: ${padding('medium')};
			background: ${color('bg')};
			border-radius: ${borderRadius};

			${(props) => {
				const { kind } = props;
				const paddings = selectPaddings(props);

				if (kind === EModal.MEDIUM) {
					return `
						max-width: 480px;
						display: flex;
						flex-direction: column;
						gap: ${paddings.medium};
						padding: ${paddings.large} ${paddings.medium};
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
			padding: ${padding('large')};
			font-size: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: ${color('grey')};
			cursor: pointer;
		`,
	},
};

export default Styled;
