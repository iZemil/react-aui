import * as React from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { IAUI, color, padding } from '../../styles';

const styles = (props: { theme: IAUI }) => `
	color: ${color('main')(props)};
	text-decoration: none;
	font-weight: 500;
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

export interface IProps extends Partial<LinkProps> {
	to: string;
	children: React.ReactNode;
	blank?: boolean;
}

export const Link = (props: IProps) => {
	const { to, blank, children, ...rest } = props;

	if (blank) {
		return (
			<StyledA href={to} target="_blank" rel="noopener noreferrer" {...rest}>
				{children}
			</StyledA>
		);
	}

	return (
		<StyledRouterLink to={to} {...rest}>
			{children}
		</StyledRouterLink>
	);
};
