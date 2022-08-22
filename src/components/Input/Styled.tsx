import styled from 'styled-components';

import { PADDINGS, borderRadius, color, disabledCss, inputLabelCss } from '../../styles';

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
			color: ${(props) => (props.error ? color('red')(props) : color('grey')(props))};
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
			background: ${color('bg')};
			color: ${color('white')};
			border: 2px solid ${(props) => (props.error ? color('red') : color('grey'))};
			border-radius: ${borderRadius};
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
