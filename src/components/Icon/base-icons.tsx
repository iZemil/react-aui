import * as React from 'react';
import type { IconType } from 'react-icons';

import { EmptyIcon } from './EmptyIcon';

type BaseIconNames =
	| 'Accept'
	| 'AddCheckbox'
	| 'AddCode'
	| 'AddDate'
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
	| 'DeleteDate'
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

type BaseSet = Record<BaseIconNames, IconType>;

const BASE_SET: BaseSet = new Proxy({} as BaseSet, {
	get(icons: BaseSet, name: BaseIconNames) {
		if (name in icons) {
			return icons[name];
		}

		return <EmptyIcon />;
	},
});

// link to react-icons/bs
type BSSet = Record<keyof typeof import('react-icons/bs'), IconType>;
const BS: BSSet = {} as BSSet;

import('react-icons/bs').then((bs) => {
	Object.assign(BS, bs);

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

export { BASE_SET, BS };
