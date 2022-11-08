import styled from 'styled-components';

import { TColors, borderRadius, color as colorFn } from '../../styles';

export interface SAvatarProps {
	square: boolean;
	src?: string;
	size: number;
	color: TColors | string;
}

const sizable = (size: number) => `
	min-width: ${size}px;
	width: ${size}px;
	height: ${size}px;
	font-size: ${size / 2}px;
`;

const Styled = {
	$: styled.div<SAvatarProps>`
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${colorFn('text')};
		background: ${(props) => colorFn(props.color as TColors)(props) ?? props.color};
		${(props) =>
			props.src &&
			`
			background-image: url("${props.src}");
			background-size: contain;
		`}
		${({ size }) => sizable(size)};
		border-radius: ${(props) => (props.square ? borderRadius(props) : '50%')};
		text-transform: uppercase;
		font-weight: 500;
		overflow: hidden;
		position: relative;
	`,

	Name: {
		$: styled.div<Pick<SAvatarProps, 'src'>>`
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: default;

			${(props) =>
				props.src &&
				`
				opacity: 0;
			`}
		`,
	},
};

export default Styled;
