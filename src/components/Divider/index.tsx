import * as React from 'react';
import styled from 'styled-components';

import { TAUIColors, TSize, borderRadius, color as colorFn, getFontSize, padding } from '../../styles';

export interface IDividerProps {
	size: TSize;
	color: TAUIColors;
	dashed?: boolean;
	text?: string;
}

const S = {
	$: styled.div<IDividerProps>`
		display: flex;
		clear: both;
		width: 100%;
		min-width: 100%;
		margin: ${(props) => padding(props.size)} 0;
		border-top: 1px ${(props) => (props.dashed ? 'dashed' : 'solid')} ${(props) => colorFn(props.color)(props)};
		position: relative;

		${(props) =>
			props.text &&
			`
        &::before {
            content: '${props.text}';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: ${colorFn('bg')(props)};
            border-radius: ${borderRadius(props)};
            font-size: ${getFontSize(props.size)}px;
            padding: 0 8px;
        }
    `}
	`,
};

export const Divider = (props: Partial<IDividerProps>) => {
	const { size = 'medium', color = 'grey', ...rest } = props;

	return <S.$ size={size} color={color} {...rest} />;
};
