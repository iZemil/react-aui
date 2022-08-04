import { Toaster } from 'react-hot-toast';

import Styled from './Styled';

interface IProps {
	message: string;
	tools: JSX.Element;
}

// Пока нет четкого понимания дизайна: подобное пока используется искать "Snack."
export const SnackActions = ({ message, tools }: IProps) => {
	return (
		<Styled.Actions.$>
			<Styled.Actions.Message.$>{message}</Styled.Actions.Message.$>

			<Styled.Actions.Tools.$>{tools}</Styled.Actions.Tools.$>
		</Styled.Actions.$>
	);
};

export const SnackbarsProvider = Toaster;
