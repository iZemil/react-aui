import styled from 'styled-components';

import { commonInputValueCss } from '../Input/Styled';

import { TextAreaProps } from './index';

const S = {
	$: styled.div``,

	Textarea: {
		$: styled.textarea<Partial<Omit<TextAreaProps, 'onChange'>>>`
			${commonInputValueCss};

			${(props) => `resize: ${props.rows ? 'none' : 'vertical'};`}
		`,
	},
};

export default S;
