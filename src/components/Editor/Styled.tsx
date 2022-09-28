import styled from 'styled-components';

import { padding } from '../../styles';
import { Button } from '../Button';
import { TextArea } from '../TextArea';

const Styled = {
	$: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: ${padding('small')};
	`,
	Head: {
		$: styled.div`
			flex: 1;
			display: flex;
			gap: ${padding('medium')};
			align-items: center;
			justify-content: space-between;
		`,
	},
	Label: {
		$: styled.div``,
	},
	Input: {
		$: styled(TextArea)`
			flex: 1;
			line-height: 1.6;
		`,
	},
	Tools: {
		$: styled.div`
			display: flex;
			align-items: center;
			gap: ${padding('medium')};
		`,
		Btn: {
			$: styled(Button).attrs({ icon: true, type: 'text', size: 'small', color: 'grey' })``,
		},
	},
	Bottom: {
		$: styled.div`
			display: flex;
			align-items: center;
			gap: ${padding('medium')};
		`,
	},
};

export default Styled;
