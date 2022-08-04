import styled from 'styled-components';

import { BORDER, PADDINGS, color, inputLabelCss } from '../../styles';

export type IStTextArea = React.DetailedHTMLProps<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
>;

export const StTextArea = styled.textarea<IStTextArea>`
	height: 80px;
	width: 100%;
	background: ${color('Bg')};
	color: ${color('White')};
	border: 1px solid ${color('Grey')};
	border-radius: ${BORDER.radius};
	padding: ${PADDINGS.Medium};
	resize: vertical;
`;

export const StTextAreaWrapper = styled.label`
	display: block;
`;

export const StTextAreaLabel = styled.div`
	margin-bottom: 8px;
	${inputLabelCss}
`;
