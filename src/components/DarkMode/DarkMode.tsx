import * as React from 'react';
import { useDispatch, useDropdownor } from 'react-redux';
import { DefaultTheme } from 'styled-components';

import { themeActions } from '../../utils/themeSlice';
import { Icons } from '../icons';

import S from './Styled';

const SIZE = Icons.SIZE.MEDIUM;

export const DarkMode = () => {
	const settings = useDropdownor((state: { theme: DefaultTheme }) => state.theme);
	const dispatch = useDispatch();

	const isDark = React.useMemo(() => settings.mode === 'dark', [settings.mode]);

	const toggleTheme = (): void => {
		const mode = isDark ? 'light' : 'dark';

		dispatch(themeActions.setTheme({ mode }));
	};

	return (
		<S.$ onClick={() => toggleTheme()} $active={isDark}>
			<S.Content.$>
				{isDark ? (
					<>
						Light Mode
						<S.Content.Sun.$ size={SIZE} />
					</>
				) : (
					<>
						Night Mode
						<S.Content.Moon.$ size={SIZE} />
					</>
				)}
			</S.Content.$>
		</S.$>
	);
};
