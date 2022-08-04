import { Icons } from '../icons';

import Styled, { IStAvatarProps } from './Styled';

interface UserResponseDto {
	name: string;
	id: string;
	color?: string;
}

export const userLink = (userId: string) => `/authors/${userId}`;

export interface IAvatarProps extends IStAvatarProps {
	user?: UserResponseDto;
	withName?: boolean;
	withLink?: boolean;
	onClick?: (user: UserResponseDto) => void;
}

export const getInitials = (name: string) => `${name[0].toUpperCase()}`;

export const Avatar = ({ user, size, withName, withLink, color, onClick, ...styledProps }: IAvatarProps) => {
	if (!user) {
		return <Icons.EmptyAvatar size={size} />;
	}

	return (
		<Styled.$
			title={user.name}
			to={withLink ? userLink(user.id) : '#'}
			size={size}
			onClick={() => {
				if (onClick) {
					onClick(user);
				}
			}}
			{...styledProps}
		>
			<Styled.Image.$ size={size} color={color ?? user.color}>
				{getInitials(user.name)}
			</Styled.Image.$>

			{withName && <Styled.Name.$ withLink={withLink}>{user.name}</Styled.Name.$>}
		</Styled.$>
	);
};
