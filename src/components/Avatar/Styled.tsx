import styled from 'styled-components';

import { TAUIColors, color, overflowedText } from '../../styles';
import { Link } from '../Link';

export interface ISAvatarProps {
	size: number;
	color: TAUIColors | string;
}

const sizable = (size: number) => `
	min-width: ${size}px;
	width: ${size}px;
	height: ${size}px;
	font-size: ${size / 2}px;
`;

const Styled = {
	$: styled(Link)<ISAvatarProps>`
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 500;
		color: ${color('text')};
		${({ size }) => (size ? `min-width: ${size}px` : '')};
	`,

	Image: {
		$: styled.div<ISAvatarProps>`
			border-radius: 100%;
			background: ${(props) => props.color};
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
						color:${color('main')(props)};`
					: `
						color: ${color('text')(props)};
					`}
		`,
	},
};

export default Styled;
