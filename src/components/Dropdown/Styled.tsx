import styled from 'styled-components';

import { border, borderRadius, color, disabledCss, padding } from '../../styles';
import { Button } from '../Button';

export interface SDropdownContentProps {
	open: boolean;
	disabled: boolean;
	left: boolean;
}

const Styled = {
	Wrapper: {
		$: styled.div`
			position: relative;
		`,
	},

	Label: {
		$: styled.div<Pick<SDropdownContentProps, 'open' | 'disabled'>>`
			position: relative;
			width: fit-content;

			${({ open }) =>
				open &&
				`
				z-index: 8;
			`}

			${({ disabled }) =>
				disabled &&
				`
					${disabledCss()}
				`}
		`,
	},

	Content: {
		$: styled.div<Partial<SDropdownContentProps>>`
			position: absolute;
			width: 100%;
			min-width: 120px;
			background: ${color('bg')};
			padding: ${padding('small')};
			border-radius: ${borderRadius};
			border: ${border('grey')};
			display: flex;
			flex-direction: column;
			gap: ${padding('small')};
			z-index: 9;
			transform: translateY(-8px);
			visibility: hidden;
			overflow: hidden;
			opacity: 0;

			${(props) => props.left && `right: 0;`}

			${(props) =>
				props.open &&
				`
				transform: none;
				visibility: visible;
				opacity: 1;
				transition: 0.2s ease-in-out;
				transform: translateY(4px);
			`}
		`,
	},

	Option: {
		$: styled(Button)`
			justify-content: flex-start;
		`,
	},
};

export default Styled;
