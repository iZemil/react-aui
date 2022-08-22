import styled from 'styled-components';

import { color } from '../../styles';

const menuTransition = '0.5s';

export interface IStSiderProps {
	open: boolean;
	$maxWidth?: string;
}

const SIDER_DEFAULT_WIDTH = 320;
const Styled = {
	$: styled.div<IStSiderProps>`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: ${menuTransition};
		z-index: 9;

		${(props) =>
			props.open
				? `background: ${color('wrapper')(props)};`
				: `background: transparent;
                pointer-events: none;`}
	`,
	Content: {
		$: styled.div<IStSiderProps>`
			position: fixed;
			right: 0;
			top: 0;
			width: 90%;
			max-width: ${(props) => props.$maxWidth ?? `${SIDER_DEFAULT_WIDTH}px`};
			height: 100%;
			background: ${color('bg')};
			transition: ${menuTransition};
			${(props) => (props.open ? `transform: none;` : `transform: translateX(100%);`)}
		`,
	},
};

export default Styled;
