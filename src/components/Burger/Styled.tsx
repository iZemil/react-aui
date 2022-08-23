import styled from 'styled-components';

import { color, padding } from '../../styles';

const Styled = {
	$: styled.button`
		width: 2.5rem;
		height: 2.5rem;
		padding: ${padding('small')};
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0);
		outline: none !important;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-size: cover;
		color: ${color('text')};
		line-height: 1.2;
		cursor: pointer;
		text-transform: uppercase;
		flex-shrink: 0;
		position: relative;
		overflow: hidden;
		transition: background-color 0.15s, color 0.15s;
		text-decoration: none !important;

		&:hover {
			background-color: ${color('text')}30;
		}
	`,
	Bar: {
		$: styled.div`
			width: 1.125rem;
			height: 0.125rem;
			border-radius: 0.125rem;
			background-color: ${color('text')};
			transition: transform 0.25s;
			transform: rotate(0);
			position: absolute;

			&::before,
			&::after {
				position: absolute;
				left: 0;
				content: '';
				width: 1.125rem;
				height: 0.125rem;
				border-radius: 0.125rem;
				background-color: ${color('text')};
				transition: transform 0.25s;
				transform: rotate(0);
			}

			&::before {
				top: -0.3125rem;
			}

			&::after {
				top: 0.3125rem;
			}
		`,
	},
};

export default Styled;
