import { Icon } from '..';
import * as React from 'react';

import { getInitials, stringToColor } from '../../utils';

import S, { ISAvatarProps } from './Styled';

export interface IAvatarProps extends Partial<ISAvatarProps> {
	children?: string;
	src?: string;
}

export const Avatar = ({
	children,
	size = 32,
	src,
	color = stringToColor(children ?? 'anonym') ?? 'main',
	square = false,
	...styledProps
}: IAvatarProps) => {
	return (
		<S.$ size={size} color={color} title={children} square={square} {...styledProps}>
			{src && <S.Image.$ src={src} />}

			<S.Name.$>{children ? getInitials(children) : <Icon.base.Person />}</S.Name.$>
		</S.$>
	);
};
