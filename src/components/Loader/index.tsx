import styled from 'styled-components';

import { color } from '../../styles';

const HEIGHT = 4;
const StLoader = styled.div`
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

	position: absolute;
	left: 0;
	top: 0;
	height: ${HEIGHT}px;
	overflow: hidden;
	width: 100%;
`;

const StLoaderBar = styled.div`
	background: ${color('Bg')};
	height: 100%;
`;

const StLoaderProgress = styled.div`
	animation: loader 2s ease infinite;
	background: ${color('Main')};
	width: 0;
	height: 100%;
`;

export const Loader = () => {
	return (
		<StLoader>
			<StLoaderBar>
				<StLoaderProgress />
			</StLoaderBar>
		</StLoader>
	);
};
