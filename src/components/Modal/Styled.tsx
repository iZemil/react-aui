import styled from 'styled-components';

import { borderRadius, color, padding } from '../../styles';
import { Button } from '../Button';

import { SModalProps } from './types';

const Styled = {
	$: styled.div<{ open: boolean }>`
		pointer-events: none;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: auto;
		max-width: 100vw;
		max-height: 100vh;
		overflow: hidden;
		padding: ${padding('medium')};
		z-index: 9;
		visibility: hidden;
		overflow: hidden;
		opacity: 0;
		transition: 0.1s ease-in-out;

		${(props) =>
			props.open &&
			`
			visibility: visible;
			opacity: 1;
		`}
	`,
	Content: {
		$: styled.div<SModalProps>`
			pointer-events: auto;
			position: relative;
			padding: ${padding('medium')};
			margin: auto;
			background: ${color('bg')};
			border-radius: ${borderRadius};
			transition: 0.3s;
			max-height: calc(100vh - ${(props) => 2 * props.theme.paddings.medium}px);
			overflow: auto;

			${(props) => {
				const { size } = props;

				switch (size) {
					case 'small':
						return `
							max-width: 300px;
						`;
					case 'medium':
						return `
							max-width: 500px;
						`;
					case 'large':
						return `
							max-width: 700px;
						`;

					default:
						return ``;
				}
			}}
		`,
	},
	Close: {
		$: styled(Button)`
			position: fixed;
			top: 0;
			right: 0;
			z-index: 9;

			span {
				position: relative;
				display: inline-block;
				width: 28px;
				height: 28px;

				&::before,
				&::after {
					position: absolute;
					content: '';
					height: 100%;
					width: 2px;
					background: ${color('white')}30;
				}

				&::before {
					transform: rotate(45deg);
				}
				&::after {
					transform: rotate(-45deg);
				}
			}
		`,
	},
};

export default Styled;
