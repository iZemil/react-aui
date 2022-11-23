import styled from 'styled-components';

import { padding } from '../../styles';

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
