import * as React from 'react';
import styled from 'styled-components';

import { color } from '../../styles';

const DEFAULT_SIZE = 4;

export interface ILoaderProps {
	active?: boolean;
	size?: number;
	relative?: boolean;
	children?: React.ReactNode;
	skeleton?: React.ReactNode;
}

const S = {
	$: styled.div<ILoaderProps>`
		@keyframes loader {
			0% {
				width: 0;
			}

			50% {
				width: 50%;
			}

			100% {
				width: 100%;
			}
		}

		position: ${(props) => (props.relative ? 'relative' : 'absolute')};
		left: 0;
		top: 0;
		height: ${(props) => props.size ?? DEFAULT_SIZE}px;
		overflow: hidden;
		width: 100%;
	`,

	Bar: {
		$: styled.div`
			background: ${color('bg')};
			height: 100%;
		`,
	},

	Progress: {
		$: styled.div`
			animation: loader 2s ease infinite;
			background: ${color('main')};
			width: 0;
			height: 100%;
		`,
	},
};

export const Loader = (props: ILoaderProps) => {
	const { active = true, skeleton, children } = props;

	return (
		<>
			{active &&
				(skeleton ?? (
					<S.$ {...props}>
						<S.Bar.$>
							<S.Progress.$ />
						</S.Bar.$>
					</S.$>
				))}

			{!active && children}
		</>
	);
};
