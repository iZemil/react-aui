import * as React from 'react';

import { getFontSize } from '../../styles';
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
	color = 'main',
	onClick,
	...styledProps
}: IAvatarProps) => {
	if (!user) {
		return <Icons.EmptyAvatar size={size} />;
	}

	return (
		<S.$
			size={size}
			color={color}
			title={user.name}
			to={link}
			onClick={() => {
				if (onClick) {
					onClick(user);
				}
			}}
			{...styledProps}
		>
			<S.Image.$ size={size} color={color}>
				{getInitials(user.name)}
			</S.Image.$>

			{withName && <S.Name.$ withLink={Boolean(link)}>{user.name}</S.Name.$>}
		</S.$>
	);
};
