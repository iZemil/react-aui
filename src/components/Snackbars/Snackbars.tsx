import { Toaster } from 'react-hot-toast';
import * as React from 'react';

import S from './Styled';

interface IProps {
	message: string;
	tools: JSX.Element;
}

// Пока нет четкого понимания дизайна: подобное пока используется искать "Snack."
export const SnackActions = ({ message, tools }: IProps) => {
	return (
		<S.Actions.$>
			<S.Actions.Message.$>{message}</S.Actions.Message.$>

			<S.Actions.Tools.$>{tools}</S.Actions.Tools.$>
		</S.Actions.$>
	);
};

export const SnackbarsProvider = Toaster;
