import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { IAUI, color, padding } from '../../styles';

const styles = (props: { theme: IAUI }) => `
	color: ${color('main')(props)};
	text-decoration: none;
	font-weight: 500;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${padding('small')(props)};
	width: fit-content;
`;

const StyledRouterLink = styled(RouterLink)`
	${styles}
`;

const StyledA = styled.a`
	${styles}
`;

interface IProps {
	to: string;
	children: React.ReactNode;
	blank?: boolean;
}

export const Link = (props: IProps) => {
	const { to, blank, children } = props;

	if (blank) {
		return (
			<StyledA href={to} target="_blank" rel="noopener noreferrer">
				{children}
			</StyledA>
		);
	}

	return <StyledRouterLink to={to}>{children}</StyledRouterLink>;
};
