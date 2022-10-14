import * as React from 'react';
import { withTheme } from 'styled-components';

import { IAUI, TSize, getAnyColor } from '../../styles';

import { IconProps } from './types';
import { BASE_SET, BASE_SIZES, BS_SET } from './utils';

function checkTSize(size?: number | string): size is TSize {
	if (!size) {
		return false;
	}

	return size in BASE_SIZES;
}

export class IconWrapper extends React.Component<IconProps & { theme?: IAUI }> {
	public static base = BASE_SET;
	public static all = BS_SET;

	render() {
		const { icon: IconComponent, color, size, ...rest } = this.props;
		const resultSize = checkTSize(size) ? BASE_SIZES[size] : size;

		const theme = this.props.theme as IAUI;

		return <IconComponent color={getAnyColor(theme, color)} size={resultSize} {...rest} />;
	}
}

export const Icon = withTheme(IconWrapper) as unknown as typeof IconWrapper;

export type { IconType } from 'react-icons';
