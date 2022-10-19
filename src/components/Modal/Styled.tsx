import styled from 'styled-components';

import { borderRadius, color, padding } from '../../styles';
import { Button } from '../Button';

import { SModalProps } from './types';

const Styled = {
	$: styled.div<SModalProps & { open: boolean }>`
		pointer-events: none;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 2 * ${padding('medium')});
		height: auto;
		max-width: 100vw;
		max-height: calc(100vh - 2 * ${padding('medium')});
		overflow: hidden;
		z-index: 9;
		visibility: hidden;
		overflow: hidden;
		opacity: 0;
		transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: ${borderRadius};
		box-shadow: 0 0 5px 1px ${color('black')}80;
		background: ${color('bg')};
		pointer-events: auto;

		${(props) =>
			props.open &&
			`
			visibility: visible;
			opacity: 1;
		`}

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
	Content: {
		$: styled.div`
			padding: 0 ${padding('large')};
			max-height: calc(100vh - 80px);
			overflow: auto;
		`,
	},
	Title: {
		$: styled.div`
			font-weight: bold;
			padding: ${padding('large')};
			display: flex;
			align-items: center;
			gap: ${padding('medium')};
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
