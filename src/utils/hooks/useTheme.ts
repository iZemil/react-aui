import { useContext } from 'react';

import { AUIContext } from '../../components';

export function useTheme() {
	const context = useContext(AUIContext);

	return { setTheme: context.setTheme, theme: context.theme };
}
