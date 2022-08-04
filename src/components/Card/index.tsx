import styled from 'styled-components';

import { BORDER, PADDINGS, color } from '../../styles';

export interface ICardProps {
	padding?: string;
}

export const Card = styled.div<ICardProps>`
	padding: ${(props) => props.padding ?? PADDINGS.Medium};
	background: ${color('Bg')};
	border-radius: ${BORDER.radius};
`;
