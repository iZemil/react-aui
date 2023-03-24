import * as React from 'react';

import { Icon } from '../..';
import { getFontSize } from '../../../styles';
import { TPrimitives, copyBuffer, wait } from '../../../utils';
import { ButtonProps } from '../types';

import S from './Styled';

export interface ICopyButtonProps extends Partial<ButtonProps> {
	value: TPrimitives | (() => TPrimitives);
	withoutIcon?: boolean;
}

export const CopyButton = (props: ICopyButtonProps) => {
	const { value, children, withoutIcon = false, type = 'text', ...rest } = props;
	const [isCopied, copy] = React.useState(false);

	const size = getFontSize(props.size) + 2;

	const handleCopy = async () => {
		try {
			await copyBuffer(typeof value === 'function' ? value() : value);

			copy(true);
			await wait(1500);
			copy(false);
		} catch (error) {
			console.error('Copy error', error);
		}
	};

	return (
		<S.$ type={type} onClick={handleCopy} color="grey" {...rest}>
			{children}

			{!withoutIcon && (
				<S.Icon.$>{isCopied ? Icon.Check({ color: 'green', size }) : Icon.Copy({ size })}</S.Icon.$>
			)}
		</S.$>
	);
};
