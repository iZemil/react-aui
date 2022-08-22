import styled from 'styled-components';

import { PADDINGS, borderRadius, color } from '../../styles';

export interface ICardProps {
	padding?: string;
}

export const Card = styled.div<ICardProps>`
	padding: ${(props) => props.padding ?? PADDINGS.Medium};
	background: ${color('bg')};
	border-radius: ${borderRadius};
`;
