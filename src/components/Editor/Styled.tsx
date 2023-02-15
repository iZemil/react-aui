import { Controlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';

import { border, borderRadius, color, padding } from '../../styles';

export const S = {
	$: styled.div`
		display: flex;
		flex-direction: column;
	`,
	Input: {
		$: styled(CodeMirror)`
			width: 100%;
			height: 100%;
			border-radius: ${borderRadius};
			overflow: hidden;
			box-sizing: border-box;
			border: ${border('grey')};
			padding: ${padding('medium')};

			.CodeMirror {
				height: 100%;
				background: transparent;
				color: ${color('text')};

				&-cursor {
					border-color: ${color('main')}90;
				}

				&-selected {
					background: ${color('main')}30;
				}

				span.cm-link {
					color: ${color('main')};
				}

				pre.HyperMD-header:after {
					display: none;
				}
			}

			.cm-s-hypermd-light {
				span.cm-formatting-list {
					color: ${color('text')};
					font-family: inherit;
				}

				img.hmd-image.hmd-image-error {
					background: none;
				}

				div.HyperMD-codeblock-bg {
					background: transparent;
				}
				pre.HyperMD-codeblock,
				span.cm-inline-code {
					color: ${color('white')};
					background: ${color('black')} !important;
					font-family: monospace;
				}
			}
		`,
	},
};
