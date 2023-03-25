import { TColors } from '../../styles';

import { useTheme } from './useTheme';

export function useColor(color: string): string {
	const {
		theme: { colors },
	} = useTheme();

	if (color in colors) {
		return colors[color as TColors];
	}

	return color;
}
