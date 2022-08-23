import * as React from 'react';
import styled from 'styled-components';

import { padding } from '../../styles';
import { BackButton } from '../Button/BackButton';

export const MENU_HEAD_BAR_HEIGH = 60;

export const Page = styled.div<{ withoutMenu?: boolean }>`
	position: relative;
	min-height: ${(props) => (props.withoutMenu ? '100vh' : `calc(100vh - ${MENU_HEAD_BAR_HEIGH}px)`)};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const PageContent = styled.div`
	margin: 0 auto;
	padding: 0 ${padding('medium')};
	max-width: 720px;
	height: 100%;
	width: 100%;
	flex: 1;
	position: relative;
`;

interface IPageTitleProps {
	children: React.ReactNode;
	withBackButton?: boolean;
}
const StyledPageTitle = {
	$: styled.h1`
		display: flex;
		align-items: center;
		padding: ${padding('medium')} 0;
		gap: ${padding('medium')};
	`,
	Children: {
		$: styled.div`
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24px;
			flex: auto;
		`,
	},
};
export const PageTitle = ({ children, withBackButton, ...rest }: IPageTitleProps) => {
	return (
		<StyledPageTitle.$ {...rest}>
			{withBackButton && <BackButton />}

			<StyledPageTitle.Children.$>{children}</StyledPageTitle.Children.$>
		</StyledPageTitle.$>
	);
};
