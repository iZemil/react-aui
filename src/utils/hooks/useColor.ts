import { useTheme } from 'styled-components';

import { TColors } from '../../styles';

export function useColor(color: TColors): string {
	const theme = useTheme();

	return theme.colors[color];
}
