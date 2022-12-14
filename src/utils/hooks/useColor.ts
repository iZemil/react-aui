import { TColors } from '../../styles';

import { useTheme } from './useTheme';

export function useColor(color: TColors): string {
	const { theme } = useTheme();

	return theme.colors[color];
}
