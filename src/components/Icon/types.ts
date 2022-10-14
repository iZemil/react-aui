import { IconBaseProps, IconType } from 'react-icons';

import { TColors, TSize } from '../../styles';

export interface IconProps extends IconBaseProps {
	icon: IconType;
	color?: TColors | string;
	size?: number | string | TSize;
}

export type BSIcons = keyof typeof import('react-icons/bs');

export type BSSet = Record<BSIcons, IconType>;

export type BaseIconNames =
	| 'Accept'
	| 'AddCheckbox'
	| 'AddCode'
	| 'AddHeading'
	| 'AddImage'
	| 'AddListItem'
	| 'ArrowLeft'
	| 'ArrowRight'
	| 'Bold'
	| 'Calendar'
	| 'Chat'
	| 'Checked'
	| 'ChevronDown'
	| 'ChevronLeft'
	| 'ChevronRight'
	| 'ChevronUp'
	| 'Clip'
	| 'Clock'
	| 'Copy'
	| 'Delete'
	| 'Edit'
	| 'EmptyAvatar'
	| 'Hide'
	| 'Home'
	| 'Info'
	| 'Italic'
	| 'Link'
	| 'Markdown'
	| 'Moon'
	| 'New'
	| 'NotChecked'
	| 'Ok'
	| 'Pause'
	| 'Percent'
	| 'Person'
	| 'Pin'
	| 'Play'
	| 'Pro'
	| 'ReadMode'
	| 'Settings'
	| 'SignOut'
	| 'Stop'
	| 'Sun'
	| 'ThreeDots';

export type BaseSet = Record<BaseIconNames, IconType>;
