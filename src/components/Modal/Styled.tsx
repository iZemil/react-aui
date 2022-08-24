import styled from 'styled-components';

import { borderRadius, color, padding } from '../../styles';
import { Button } from '../Button';

import { ISModalProps } from './types';

const Styled = {
	$: styled.div`
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
	`,
	Content: {
		$: styled.div<ISModalProps>`
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
			position: absolute;
			top: 0;
			right: 0;
			padding: ${padding('large')};
			font-size: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: ${color('grey')};
			cursor: pointer;
			z-index: 9;
		`,
	},
};

export default Styled;
