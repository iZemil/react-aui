import styled from 'styled-components';

import { border, borderRadius, color, padding } from '../../styles';
import { Button } from '../Button';

export interface ISDropdownContentProps {
	open: boolean;
	left: boolean;
}

const Styled = {
	Wrapper: {
		$: styled.div`
			position: relative;
		`,
	},

	Label: {
		$: styled.div<Pick<ISDropdownContentProps, 'open'>>`
			position: relative;

			${({ open }) =>
				open &&
				`
				z-index: 8;
			`}
		`,
	},

	Content: {
		$: styled.div<ISDropdownContentProps>`
			position: absolute;
			background: ${color('bg')};
			padding: ${padding('small')};
			border-radius: ${borderRadius};
			border: ${border('grey')};
			display: flex;
			flex-direction: column;
			gap: 10px;
			z-index: 9;

			${(props) => props.left && `right: 0;`}
		`,
	},

	Item: {
		$: styled(Button)<{ icon: boolean }>`
			${(props) =>
				props.icon &&
				`
				justify-content: flex-start;
			`}
		`,
	},
};

export default Styled;
