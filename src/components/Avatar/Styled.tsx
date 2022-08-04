import styled from 'styled-components';

import { Link } from '../Link';
import { color, overflowedText } from '../../styles';

export interface IStAvatarProps {
	size?: number;
	color?: string;
}

const DEFAULT_ATAVAR_DIAMETER = 100;

const sizable = (size = DEFAULT_ATAVAR_DIAMETER) => `
	min-width: ${size}px;
	width: ${size}px;
	height: ${size}px;
	font-size: ${size / 2}px;
`;

const Styled = {
	$: styled(Link)<IStAvatarProps>`
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 500;
		color: ${color('White')};
		${({ size }) => (size ? `min-width: ${size}px` : '')};
	`,
	Image: {
		$: styled.div<IStAvatarProps>`
			border-radius: 100%;
			background: ${(props) => (props.color ? `#${props.color}` : color('Main')(props))};
			display: flex;
			align-items: center;
			justify-content: center;
			${({ size }) => sizable(size)}
			font-weight: 500;
		`,
	},
	Name: {
		$: styled.div<{ withLink?: boolean }>`
			${overflowedText()}

			${(props) =>
				props.withLink
					? `
						color:${color('Main')(props)};`
					: `
						color: ${color('White')(props)};
					`}
		`,
	},
};

export default Styled;
