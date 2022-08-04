import styled from 'styled-components';

import { Button } from '../Button';
import { color } from '../../styles';

export interface IStBackButtonProps {
	left?: boolean;
}
export const StBackButton = styled(Button)<IStBackButtonProps>`
	cursor: pointer;
	color: ${color('White')};
	width: 40px;
	height: 40px;

	${(props) =>
		props.left &&
		`
		position: absolute;
		left: 10px;
		top: 10px;
		background: ${color('Bg')(props)};
		border-radius: 50%;
	`}
`;
