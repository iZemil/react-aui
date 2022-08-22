import styled from 'styled-components';

import { inputLabelCss, padding } from '../../styles';

const Styled = {
	$: styled.div`
		font-size: 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;

		p {
			margin: 0;
			font-weight: 400;
			word-break: break-word;
			line-height: 1.4;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			padding: 0;
			margin: 0;
		}

		img {
			width: 100%;
			height: auto;
		}

		ul,
		ol {
			display: flex;
			flex-direction: column;
			gap: ${padding('small')};
			margin: ${padding('medium')} 0;
			padding-left: ${padding('large')};
		}

		/* CHECKBOXES */
		.contains-task-list {
			li.task-list-item {
				display: flex;
				align-items: center;
				gap: ${padding('medium')};
				margin-left: -${padding('large')};
			}
		}
	`,
	Label: {
		$: styled.div`
			${inputLabelCss}
		`,
	},
};

export default Styled;
