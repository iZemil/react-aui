import * as React from 'react';
import styled from 'styled-components';

import { TColors, TSize, color, getFontSize, padding } from '../../styles';
import { Button } from '../Button';

interface ISProps {
	color?: TColors;
	size?: TSize;
	inline: boolean;
	bold?: boolean;
	uppercase?: boolean;
	italic?: boolean;
}

export type TextProps = {
	children: React.ReactNode;
	maxLength?: number;
	style?: React.CSSProperties;
} & Partial<ISProps>;

const S = {
	$: styled.div<ISProps>`
		display: ${(props) => (props.inline ? 'inline' : 'inline-block')};
		font-size: ${(props) => getFontSize(props.size ?? 'medium')}px;
		gap: ${padding('medium')};
		line-height: 1.4;
		color: ${(props) => color(props.color ?? 'text')(props)};

		${(props) => (props.bold ? 'font-weight: bold;' : '')}
		${(props) => (props.italic ? 'font-style: italic;' : '')}
		${(props) => (props.uppercase ? 'text-transform: uppercase;' : '')}

		button {
			padding: 0 2px;
		}
	`,
};

export const Text = (props: TextProps) => {
	const [withMore, setWithMore] = React.useState(true);
	const { children, maxLength, size, inline = false, ...rest } = props;

	let trimmed;
	const needTrim = withMore && maxLength && typeof children === 'string' && children.length > maxLength;
	if (needTrim) {
		trimmed = (
			<>
				{children.slice(0, maxLength)}{' '}
				<Button size={size} type="text" to="#" onClick={() => setWithMore(false)}>
					...more
				</Button>
			</>
		);
	}

	return (
		<S.$ inline={inline} size={size} {...rest}>
			{trimmed ?? children}
		</S.$>
	);
};
