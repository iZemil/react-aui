import * as React from 'react';
import styled from 'styled-components';

import { TColors, TSize, borderRadius, color as colorFn, padding, toPx } from '../../styles';

export interface IDividerProps {
	size: TSize;
	color: TColors;
	children?: React.ReactNode;
	dashed?: boolean;
	top?: number;
	bottom?: number;
}

const S = {
	$: styled.div<IDividerProps>`
		display: flex;
		clear: both;
		width: 100%;
		min-width: 100%;
		border-top: 1px ${(props) => (props.dashed ? 'dashed' : 'solid')} ${(props) => colorFn(props.color)(props)};
		position: relative;

		margin: ${(props) => padding(props.size)} 0;
		${(props) => (props.top ? `margin-top: ${toPx(props.top)};` : '')}
		${(props) => (props.bottom ? `margin-bottom: ${toPx(props.bottom)};` : '')}
	`,
	Content: {
		$: styled.div`
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: ${colorFn('bg')};
			border-radius: ${borderRadius};
			padding: 0 8px;
		`,
	},
};

export const Divider = (props: Partial<IDividerProps>) => {
	const { size = 'medium', color = 'grey', children, ...rest } = props;

	return (
		<S.$ size={size} color={color} {...rest}>
			{children ? <S.Content.$>{children}</S.Content.$> : null}
		</S.$>
	);
};
