import styled from 'styled-components';

import { border, borderRadius, color, inputLabelCss, padding } from '../../styles';

export type IStTextArea = React.DetailedHTMLProps<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
>;

export const StTextArea = styled.textarea<IStTextArea>`
	height: 80px;
	width: 100%;
	background: ${color('bg')};
	color: ${color('white')};
	border: ${border('grey')};
	border-radius: ${borderRadius};
	padding: ${padding('medium')};
	resize: vertical;
`;

export const StTextAreaWrapper = styled.label`
	display: block;
`;

export const StTextAreaLabel = styled.div`
	margin-bottom: 8px;
	${inputLabelCss}
`;
