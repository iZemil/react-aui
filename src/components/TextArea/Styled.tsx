import styled from 'styled-components';

import { commonInputValueCss } from '../Input/Styled';

import { TextAreaProps } from './index';

const S = {
	$: styled.div``,

	Value: {
		$: styled.textarea<Partial<Omit<TextAreaProps, 'onChange'>>>`
			${commonInputValueCss};

			${(props) => `resize: ${props.rows ? 'none' : 'vertical'};`}
		`,
		Wrapper: {
			$: styled.div`
				position: relative;
				overflow: hidden;
				display: flex;
			`,
		},
	},
};

export default S;
