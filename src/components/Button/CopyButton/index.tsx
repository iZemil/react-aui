import * as React from 'react';
import { useTheme } from 'styled-components';

import { color } from '../../../styles';
import { IAUI } from '../../../styles/types';
import { getFontSize } from '../../../styles/utils';
import { TPrimitives, copyBuffer, wait } from '../../../utils';
import { Icons } from '../../icons';
import { ButtonProps } from '../types';

import S from './Styled';

export interface ICopyButtonProps extends Partial<ButtonProps> {
	value: TPrimitives | (() => TPrimitives);
}

export const CopyButton = (props: ICopyButtonProps) => {
	const { value, children, type = 'text', ...rest } = props;
	const theme = useTheme() as IAUI;
	const [isCopied, copy] = React.useState(false);

	const iconSize = getFontSize(props.size);

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

			<S.Icon.$>
				{isCopied ? (
					<Icons.Ok color={color('green')({ theme })} size={iconSize} />
				) : (
					<Icons.Copy size={iconSize} />
				)}
			</S.Icon.$>
		</S.$>
	);
};
