import { IconBaseProps } from 'react-icons';

import { TColors, TSize } from '../../styles';

export interface IconProps extends IconBaseProps {
	icon: (props: Partial<IconProps>) => JSX.Element;
	color?: TColors | string;
	size?: number | string | TSize;
}
