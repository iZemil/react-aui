import styled from 'styled-components';

import { BORDER, PADDINGS, color, disabledCss, inputLabelCss } from '../../styles';

export interface IStInput
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: string;
}

const Styled = {
	$: styled.label`
		display: flex;
		flex-direction: column;
		gap: ${PADDINGS.Small};
	`,
	Label: {
		$: styled.div<{ error?: string }>`
			${inputLabelCss}
			color: ${(props) => (props.error ? color('Red')(props) : color('Grey')(props))};
		`,
	},
	Error: {
		$: styled.span`
			text-transform: none;
			font-style: italic;
		`,
	},
	Input: {
		$: styled.input<IStInput>`
			height: 42px;
			width: 100%;
			background: ${color('Bg')};
			color: ${color('White')};
			border: 2px solid ${(props) => (props.error ? color('Red') : color('Grey'))};
			border-radius: ${BORDER.radius};
			padding: 4px 10px;

			${({ type }) =>
				type === 'password' &&
				`
				font-size: 30px;
			`}

			${({ disabled }) => disabled && disabledCss()}
		`,
	},
};

export default Styled;
