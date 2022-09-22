import styled from 'styled-components';

import { commonInputValueCss } from '../Input/Styled';

import { TextAreaProps } from './index';

export const S = {
	$: styled.div``,
	Value: {
		$: styled.textarea<Partial<Omit<TextAreaProps, 'onChange'>>>`
			${commonInputValueCss};

			${(props) => `resize: ${props.rows ? 'none' : 'vertical'};`}
		`,
	},
};
