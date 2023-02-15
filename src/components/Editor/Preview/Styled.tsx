import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { border, borderRadius, color, padding } from '../../../styles';

export const S = {
	$: styled(ReactMarkdown)`
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

		hr {
			width: 100%;
			color: ${color('grey')};
			border: 0;
			border-bottom: 1px solid;
		}

		table {
			border-collapse: collapse;
		}

		td,
		th {
			border: ${border('grey')};
			padding: ${padding('medium')};
			text-align: left;
		}

		code {
			background: ${color('black')};
			color: ${color('white')};
			border: ${border('grey')};
			border-radius: ${borderRadius};
			padding: 4px;
		}

		pre > code {
			display: block;
			padding: ${padding('medium')};
		}
	`,
};
