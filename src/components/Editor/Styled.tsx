import styled from 'styled-components';

import { borderRadius, color, inputLabelCss, padding } from '../../styles';
import { Button } from '../Button';

const Styled = {
	$: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	`,
	Wrapper: {
		$: styled.div`
			display: flex;
			flex-direction: column;
			gap: ${padding('medium')};
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
		`,
	},
	Input: {
		$: styled.textarea`
			flex: 1;
			border: 0;
			padding: 0;
			resize: none;
			border-radius: ${borderRadius};
			background: transparent;
			outline: none;
			line-height: 1.4;
			font-size: 14px;
		`,
	},
	Tools: {
		$: styled.div`
			display: flex;
			align-items: center;
			gap: 10px;
		`,
		Btn: {
			$: styled(Button)`
				color: ${color('white')};
			`,
		},
	},
	Label: {
		$: styled.div`
			${inputLabelCss}
		`,
	},
};

export default Styled;
