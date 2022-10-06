import { Toaster } from 'react-hot-toast';

interface IProps {
	message: string;
	tools: JSX.Element;
}

// Пока нет четкого понимания дизайна: подобное пока используется искать "Snack."
// import S from './Styled';
// export const SnackActions = ({ message, tools }: IProps) => {
// 	return (
// 		<S.Actions.$>
// 			<S.Actions.Message.$>{message}</S.Actions.Message.$>

// 			<S.Actions.Tools.$>{tools}</S.Actions.Tools.$>
// 		</S.Actions.$>
// 	);
// };

export const SnackbarsProvider = Toaster;
