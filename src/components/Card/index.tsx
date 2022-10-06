import styled from 'styled-components';

import { IAUI, TColors, TSize, border, borderRadius, getAnyColor, padding } from '../../styles';

export interface CardProps {
	size?: TSize;
	color?: TColors | string;
}

export const Card = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	gap: ${(props) => padding(props.size ?? 'medium')};
	padding: ${(props) => padding(props.size ?? 'medium')};
	border: ${border('grey')};
	border-radius: ${borderRadius};
	background: ${(props) => {
		const theme = props.theme as IAUI;

		return getAnyColor(theme, props.color) ?? 'transparent';
	}};

	@media screen and (max-width: 480px) {
		padding: ${padding('small')};
		border: 0;
	}
`;
