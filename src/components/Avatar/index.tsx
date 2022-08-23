import * as React from 'react';
import { useTheme } from 'styled-components';

import { TAUIColors, color as colorFn, getFontSize } from '../../styles';
import { getInitials } from '../../utils';
import { Icons } from '../icons';

import S, { ISAvatarProps } from './Styled';

interface IUser {
	name: string;
	id: string | number | null | undefined;
}

export interface IAvatarProps extends Partial<ISAvatarProps> {
	user?: IUser;
	withName?: boolean;
	link?: string;
	onClick?: (user: IUser) => void;
}

export const Avatar = ({
	user,
	size = getFontSize('medium'),
	withName,
	link = '',
	color,
	onClick,
	...styledProps
}: IAvatarProps) => {
	const theme = useTheme();
	const foundColor = color ? colorFn(color as TAUIColors)({ theme }) ?? color : colorFn('main')({ theme });

	if (!user) {
		return <Icons.EmptyAvatar color={foundColor} size={size} />;
	}

	return (
		<S.$
			size={size}
			color={foundColor}
			title={user.name}
			to={link}
			onClick={() => {
				if (onClick) {
					onClick(user);
				}
			}}
			{...styledProps}
		>
			<S.Image.$ size={size} color={foundColor}>
				{getInitials(user.name)}
			</S.Image.$>

			{withName && <S.Name.$ withLink={Boolean(link)}>{user.name}</S.Name.$>}
		</S.$>
	);
};
