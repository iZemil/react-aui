import { Icon } from '..';

import { getInitials, stringToColor } from '../../utils';

import S, { SAvatarProps } from './Styled';

export interface AvatarProps extends Partial<SAvatarProps> {
	children?: string;
}

export const Avatar = ({
	children,
	size = 32,
	src,
	color = stringToColor(children ?? 'anonym') ?? 'main',
	square = false,
	...styledProps
}: AvatarProps) => {
	return (
		<S.$ size={size} color={color} title={children} square={square} src={src} {...styledProps}>
			{/* {src && <S.Image.$ src={src} />} */}

			<S.Name.$ src={src}>{children ? getInitials(children) : <Icon.base.Person />}</S.Name.$>
		</S.$>
	);
};
