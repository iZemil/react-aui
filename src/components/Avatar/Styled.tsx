import styled from 'styled-components';

import { TAUIColors, borderRadius, color as colorFn } from '../../styles';

export interface ISAvatarProps {
	square: boolean;
	size: number;
	color: TAUIColors | string;
}

const sizable = (size: number) => `
	width: ${size}px;
	height: ${size}px;
	font-size: ${size / 2}px;
`;

const Styled = {
	$: styled.div<ISAvatarProps>`
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${colorFn('text')};
		background: ${(props) => colorFn(props.color as TAUIColors)(props) ?? props.color};
		${({ size }) => sizable(size)};
		border-radius: ${(props) => (props.square ? borderRadius(props) : '50%')};
		text-transform: uppercase;
		font-weight: 500;
		overflow: hidden;
		position: relative;
	`,

	Image: {
		$: styled.img`
			display: block;
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
			z-index: 1;
		`,
	},

	Name: {
		$: styled.div`
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
		`,
	},
};

export default Styled;
