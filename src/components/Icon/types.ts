import { IconBaseProps } from 'react-icons';
import { IconType } from 'react-icons/lib';

import { TColors, TSize } from '../../styles';

export interface IconProps extends IconBaseProps {
	icon: IconType;
	color?: TColors | string;
	size?: number | string | TSize;
}
