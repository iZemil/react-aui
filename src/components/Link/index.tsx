import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { color, padding } from '../../styles';

export const Link = styled(RouterLink)`
	color: ${color('main')};
	text-decoration: none;
	font-weight: 500;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${padding('small')};
	width: fit-content;
`;
