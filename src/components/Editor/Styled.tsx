import ReactCodeMirror from 'react-codemirror';
import styled from 'styled-components';

import { borderRadius, color } from '../../styles';

export const S = {
	$: styled(ReactCodeMirror)`
		width: 100%;
		height: 100%;
		border-radius: ${borderRadius};
		overflow: hidden;

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
		}
	`,
};
