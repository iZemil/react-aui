import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import { IconType } from 'react-icons/lib';
import { useTheme } from 'styled-components';

import { IAUI, TColors, TSize, getAnyColor, getFontSize } from '../../styles';

import { Icons } from './base-icons';

const BASE_SIZES = {
	small: getFontSize('small') * 1.25,
	medium: getFontSize('medium') * 1.25,
	large: getFontSize('large') * 1.25,
};

export interface IconProps extends IconBaseProps {
	icon: IconType;
	color?: TColors | string;
	size?: number | string | TSize;
}

function checkTSize(size?: number | string): size is TSize {
	if (!size) {
		return false;
	}

	return size in BASE_SIZES;
}

export const Icon = (props: IconProps) => {
	const { icon: IconComponent, color, size, ...rest } = props;
	const theme = useTheme() as IAUI;
	const resultSize = checkTSize(size) ? BASE_SIZES[size] : size;

	return <IconComponent color={getAnyColor(theme, color)} size={resultSize} {...rest} />;
};

interface SvgIconProps {
	size?: IconProps['size'];
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

Icon.Base = Icons;
