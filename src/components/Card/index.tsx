import styled from 'styled-components';

import { borderRadius, color, padding } from '../../styles';

export interface ICardProps {
	padding?: string;
}

export const Card = styled.div<ICardProps>`
	padding: ${(props) => props.padding ?? padding('medium')(props)};
	background: ${color('bg')};
	border-radius: ${borderRadius};
`;
