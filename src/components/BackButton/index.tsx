import { useNavigate } from 'react-router';

import { Icons } from '../icons';

import { IStBackButtonProps, StBackButton } from './Styled';

type IBackButtonProps = IStBackButtonProps;

// TODO#0: если открыть новую страницу и кликнуть нежелатльное поведение
export function BackButton(props: IBackButtonProps) {
	const { left } = props;
	const navigate = useNavigate();

	return (
		<StBackButton
			icon
			onClick={() => {
				navigate(-1);
			}}
			left={left}
		>
			<Icons.BackButton />
		</StBackButton>
	);
}
