import styled from 'styled-components';

import { PADDINGS, borderRadius, color } from '../../styles';

export interface IStProps {
	position?: 'right' | 'top';
}

const Styled = {
	$: styled.div`
		position: relative;
	`,
	Label: {
		$: styled.div<{ active: boolean }>`
			position: relative;

			${({ active }) =>
				active &&
				`
				z-index: 8;
			`}
		`,
	},
	Children: {
		$: styled.div<IStProps>`
			position: absolute;
			background: ${color('bg')};
			padding: ${PADDINGS.Small};
			top: 32px;
			border-radius: ${borderRadius};
			z-index: 9;
			border: 1px solid ${color('grey')};
			min-width: 150px;
			display: flex;
			flex-direction: column;
			gap: 10px;

			${({ position }) => {
				if (position === 'right') {
					return `
						left: -${PADDINGS.Small};
					`;
				}

				if (position === 'top') {
					return `
						top: -12px;
   						transform: translateY(-100%);
					`;
				}

				return `
					right: -${PADDINGS.Small};
				`;
			}}
		`,
	},
	Overlay: {
		$: styled.div`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${color('wrapper')};
			opacity: 0.66;
		`,
	},
};

export default Styled;
