import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { EThemeMode, themeActions } from '../../styles/themeSlice';

import { Icons } from '../icons';

import Styled from './Styled';

const SIZE = Icons.SIZE.MEDIUM;

export const DarkMode = () => {
	const settings = useSelector((state: { theme: DefaultTheme }) => state.theme);
	const dispatch = useDispatch();

	const isDark = useMemo(() => settings.mode === EThemeMode.DARK, [settings.mode]);

	const toggleTheme = (): void => {
		const mode = isDark ? EThemeMode.LIGHT : EThemeMode.DARK;

		dispatch(themeActions.setTheme({ mode }));
	};

	return (
		<Styled.$ onClick={() => toggleTheme()} $active={isDark}>
			<Styled.Content.$>
				{isDark ? (
					<>
						Light Mode
						<Styled.Content.Sun.$ size={SIZE} />
					</>
				) : (
					<>
						Night Mode
						<Styled.Content.Moon.$ size={SIZE} />
					</>
				)}
			</Styled.Content.$>
		</Styled.$>
	);
};
