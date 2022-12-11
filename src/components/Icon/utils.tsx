import type { IconType } from 'react-icons';
// TODO: split react-icons
// import('react-icons/bs').then((bs) => {
// 	Object.assign(BS_SET, bs);
// });
import * as bs from 'react-icons/bs';

import { TSize, getFontSize } from '../../styles';

import { BSSet, BaseSet } from './types';

interface SvgIconProps {
	size?: TSize;
}

/**
 * Fn to create a svg icon
 * @param svg
 * @param alt alternative name
 * @exmaple
 *
 * import SvgIcon from './assets/icon.svg';
 *
 * const Icons = {
 *   ...appIcons,
 *   NewIcon: svgToIcon(SvgIcon, 'new_icon'),
 * }
 */
export const svgToIcon = (svg: string, alt: string) => {
	return function SvgIcon(props: SvgIconProps) {
		const { size, ...rest } = props;

		return <img {...rest} src={svg} width={size} height={size} alt={alt} />;
	};
};

export const BASE_SIZES = {
	small: getFontSize('small') * 1.25,
	medium: getFontSize('medium') * 1.25,
	large: getFontSize('large') * 1.25,
};

// link to react-icons/bs
export const BS_SET = bs;

export function createIconAliases<TAlias extends string>(
	fn: (bsIcons: BSSet) => Record<TAlias, IconType>
): Record<TAlias, IconType> {
	return fn(BS_SET);
}

export const BASE_SET: BaseSet = createIconAliases((bs) => ({
	Italic: bs.BsTypeItalic,
	AddHeading: bs.BsTypeH3,
	Bold: bs.BsTypeBold,
	Markdown: bs.BsMarkdown,
	Sun: bs.BsSun,
	Moon: bs.BsMoonStars,
	Home: bs.BsHouse,
	Link: bs.BsLink45Deg,
	Pin: bs.BsPinAngle,
	Delete: bs.BsTrash,
	ReadMode: bs.BsEyeglasses,
	AddCheckbox: bs.BsListCheck,
	AddListItem: bs.BsListUl,
	AddImage: bs.BsImage,
	AddCode: bs.BsCodeSlash,
	Checked: bs.BsFillCheckSquareFill,
	NotChecked: bs.BsSquare,
	Info: bs.BsQuestionCircle,
	Pro: bs.BsTrophy,
	Calendar: bs.BsCalendarRange,
	ChevronLeft: bs.BsChevronLeft,
	ChevronRight: bs.BsChevronRight,
	Clip: bs.BsPaperclip,
	ThreeDots: bs.BsThreeDotsVertical,
	Person: bs.BsPerson,
	Percent: bs.BsPercent,
	Chat: bs.BsChat,
	EmptyAvatar: bs.BsPersonCircle,
	Ok: bs.BsCheck2,
	Copy: bs.BsFiles,
	New: bs.BsPlusCircle,
	Edit: bs.BsPencil,
	Play: bs.BsPlayCircle,
	Pause: bs.BsPauseCircle,
	Settings: bs.BsGear,
	Hide: bs.BsEyeSlash,
	Accept: bs.BsCheck,
	Clock: bs.BsClock,
	Stop: bs.BsStopCircle,
	ArrowRight: bs.BsArrowRight,
	ArrowLeft: bs.BsArrowLeft,
	SignOut: bs.BsDoorOpen,
	ChevronDown: bs.BsChevronDown,
	ChevronUp: bs.BsChevronUp,
}));
