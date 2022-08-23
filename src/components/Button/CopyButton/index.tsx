import * as React from 'react';
import { useTheme } from 'styled-components';

import { color } from '../../../styles';
import { IAUI, TSize } from '../../../styles/types';
import { copyBuffer, wait } from '../../../utils';
import { Icons } from '../../icons';
import { IButtonProps } from '../types';

import S from './Styled';

type TValue = string | number | null | undefined;

export interface ICopyButtonProps extends Partial<IButtonProps> {
	value: TValue | (() => TValue);
	isShort?: boolean;
}

// TODO: to consts 14, 16, 18
const getSizeNumber = (size?: TSize): number => {
	switch (size) {
		case 'small':
			return 14;

		case 'medium':
			return 16;
		case 'large':
			return 18;

		default:
			return 14;
	}
};

export const CopyButton = (props: ICopyButtonProps) => {
	const { value, children, isShort, ...rest } = props;
	const theme = useTheme() as IAUI;
	const [isCopied, copy] = React.useState(false);

	const iconSize = getSizeNumber(props.size);

	const handleCopy = async () => {
		copyBuffer(typeof value === 'string' ? value : value());
		copy(true);

		await wait(1500);
		copy(false);
	};

	return (
		<S.$
			type="text"
			withChildren={Boolean(children)}
			isShort={Boolean(isShort)}
			onClick={() => {
				handleCopy();
			}}
			{...rest}
		>
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
