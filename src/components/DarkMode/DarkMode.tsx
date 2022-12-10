import * as React from 'react';

import S from './Styled';

const SIZE = 20;

export const DarkMode = () => {
	// const settings = useSelector((state: { theme: DefaultTheme }) => state.theme);
	// const dispatch = useDispatch();

	// const isDark = React.useMemo(() => settings.mode === 'dark', [settings.mode]);

	// const toggleTheme = (): void => {
	// 	const mode = isDark ? 'light' : 'dark';

	// 	dispatch(themeActions.setTheme({ mode }));
	// };
	const isLight = true;

	return (
		<S.$
			onClick={() => {
				return;
			}}
			$active={true}
		>
			<S.Content.$>
				{isLight ? (
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
