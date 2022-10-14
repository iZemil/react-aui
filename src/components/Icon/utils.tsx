import * as React from 'react';

import { TSize, getFontSize } from '../../styles';

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
