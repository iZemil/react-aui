import styled from 'styled-components';

import { PADDINGS, inputLabelCss } from '../../styles';

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
			gap: ${PADDINGS.Small};
			margin: ${PADDINGS.Medium} 0;
			padding-left: ${PADDINGS.Big};
		}

		/* CHECKBOXES */
		.contains-task-list {
			li.task-list-item {
				display: flex;
				align-items: center;
				gap: ${PADDINGS.Medium};
				margin-left: -${PADDINGS.Big};
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
