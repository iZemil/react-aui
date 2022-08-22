import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';

import { EThemeMode } from '../../styles';
import { themeActions } from '../../utils/themeSlice';
import { Icons } from '../icons';

import S from './Styled';

const SIZE = Icons.SIZE.MEDIUM;

export const DarkMode = () => {
	const settings = useSelector((state: { theme: DefaultTheme }) => state.theme);
	const dispatch = useDispatch();

	const isDark = React.useMemo(() => settings.mode === EThemeMode.DARK, [settings.mode]);

	const toggleTheme = (): void => {
		const mode = isDark ? EThemeMode.LIGHT : EThemeMode.DARK;

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
