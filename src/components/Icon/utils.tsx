import * as React from 'react';
import { IconType } from 'react-icons';

import { TSize, getFontSize } from '../../styles';

import { EmptyIcon } from './EmptyIcon';
import { BSIcons, BSSet, BaseIconNames, BaseSet } from './types';

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
		const { size } = props;

		return <img src={svg} width={size} height={size} alt={alt} />;
	};
};

export const BASE_SIZES = {
	small: getFontSize('small') * 1.25,
	medium: getFontSize('medium') * 1.25,
	large: getFontSize('large') * 1.25,
};

// link to react-icons/bs
export const BS_SET = new Proxy({} as BSSet, {
	get(bsIcons: BSSet, name: BSIcons) {
		if (name in bsIcons) {
			return bsIcons[name];
		}

		return <EmptyIcon />;
	},
});

import('react-icons/bs').then((bs) => {
	Object.assign(BS_SET, bs);

	BASE_SET.Italic = bs.BsTypeItalic;
	BASE_SET.AddHeading = bs.BsTypeH3;
	BASE_SET.Bold = bs.BsTypeBold;
	BASE_SET.Markdown = bs.BsMarkdown;
	BASE_SET.Sun = bs.BsSun;
	BASE_SET.Moon = bs.BsMoonStars;
	BASE_SET.Home = bs.BsHouse;
	BASE_SET.Link = bs.BsLink45Deg;
	BASE_SET.Pin = bs.BsPinAngle;
	BASE_SET.Delete = bs.BsTrash;
	BASE_SET.ReadMode = bs.BsEyeglasses;
	BASE_SET.AddCheckbox = bs.BsListCheck;
	BASE_SET.AddListItem = bs.BsListUl;
	BASE_SET.AddImage = bs.BsImage;
	BASE_SET.AddCode = bs.BsCodeSlash;
	BASE_SET.Checked = bs.BsFillCheckSquareFill;
	BASE_SET.NotChecked = bs.BsSquare;
	BASE_SET.Info = bs.BsQuestionCircle;
	BASE_SET.Pro = bs.BsTrophy;
	BASE_SET.Calendar = bs.BsCalendarRange;
	BASE_SET.ChevronLeft = bs.BsChevronLeft;
	BASE_SET.ChevronRight = bs.BsChevronRight;
	BASE_SET.Clip = bs.BsPaperclip;
	BASE_SET.ThreeDots = bs.BsThreeDotsVertical;
	BASE_SET.Person = bs.BsPerson;
	BASE_SET.Percent = bs.BsPercent;
	BASE_SET.Chat = bs.BsChat;
	BASE_SET.EmptyAvatar = bs.BsPersonCircle;
	BASE_SET.Ok = bs.BsCheck2;
	BASE_SET.Copy = bs.BsFiles;
	BASE_SET.New = bs.BsPlusCircle;
	BASE_SET.Edit = bs.BsPencil;
	BASE_SET.Play = bs.BsPlayCircle;
	BASE_SET.Pause = bs.BsPauseCircle;
	BASE_SET.Settings = bs.BsGear;
	BASE_SET.Hide = bs.BsEyeSlash;
	BASE_SET.Accept = bs.BsCheck;
	BASE_SET.Clock = bs.BsClock;
	BASE_SET.Stop = bs.BsStopCircle;
	BASE_SET.ArrowRight = bs.BsArrowRight;
	BASE_SET.ArrowLeft = bs.BsArrowLeft;
	BASE_SET.SignOut = bs.BsDoorOpen;
	BASE_SET.ChevronDown = bs.BsChevronDown;
	BASE_SET.ChevronUp = bs.BsChevronUp;
});

export const BASE_SET: BaseSet = new Proxy({} as BaseSet, {
	get(icons: BaseSet, name: BaseIconNames) {
		if (name in icons) {
			return icons[name];
		}

		return <EmptyIcon />;
	},
});

export function createIconAliases<TAlias extends string>(
	fn: (bsIcons: BSSet) => Record<TAlias, IconType>
): Record<TAlias, IconType> {
	return fn(BS_SET);
}
