import styled from 'styled-components';

import { IAUI, TColors, TSize, border, borderRadius, getAnyColor, padding } from '../../styles';

export interface CardProps {
	size?: TSize;
	color?: TColors | string;
	dashed?: boolean;
	hidden?: boolean;
	row?: boolean;
}

export const Card = styled.div<CardProps>`
	display: flex;
	${(props) => (props.row ? `align-items: center;` : `flex-direction: column;`)}
	gap: ${(props) => padding(props.size ?? 'medium')};
	padding: ${(props) => padding(props.size ?? 'medium')};
	border-radius: ${borderRadius};

	${(props) => {
		if (props.dashed) {
			return `
				border-style: dashed;
				border-width: 2px;
				box-shadow: none;
				background: transparent !important;
			`;
		}

		return `
			border: ${border('grey')(props)};
		`;
	}}

	${(props) => {
		if (props.color) {
			const theme = props.theme as IAUI;
			const colorVal = getAnyColor(theme, props.color);

			return `
				background: ${colorVal};
				border-color: ${colorVal};
			`;
		}

		return ``;
	}}

	${(props) => {
		if (props.hidden) {
			return `
				display: none;
			`;
		}

		return ``;
	}}

	@media screen and (max-width: 480px) {
		padding: ${padding('medium')};
	}
`;
