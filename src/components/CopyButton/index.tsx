import { useState } from 'react';
import { useTheme } from 'styled-components';

import { color } from '../../styles';
import { IAUI } from '../../styles/types';
import { copyBuffer, wait } from '../../utils';
import { Icons } from '../icons';

import Styled from './Styled';

export interface ICopyButtonProps {
	value: string;
	isShort?: boolean;
	children?: React.ReactElement;
	onCopy?: (value: string) => void;
}

export const CopyButton = ({ value, children, isShort, onCopy, ...rest }: ICopyButtonProps) => {
	const theme = useTheme() as IAUI;
	const ICON_SIZE = 18;
	const [isCopied, copy] = useState(false);

	const handleCopy = async () => {
		copyBuffer(value);
		copy(true);

		if (onCopy) {
			onCopy(value);
		}

		await wait(1500);
		copy(false);
	};

	return (
		<Styled.$
			withChildren={Boolean(children)}
			isShort={Boolean(isShort)}
			onClick={() => {
				handleCopy();
			}}
			{...rest}
		>
			{children}

			<Styled.Icon.$>
				{isCopied ? (
					<Icons.Ok color={color('green')({ theme })} size={ICON_SIZE} />
				) : (
					<Icons.Copy size={ICON_SIZE} />
				)}
			</Styled.Icon.$>

			{Boolean(!isShort && isCopied) && <Styled.CopiedText.$>Скопировано</Styled.CopiedText.$>}
		</Styled.$>
	);
};
