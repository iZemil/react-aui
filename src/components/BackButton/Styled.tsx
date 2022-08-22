import styled from 'styled-components';

import { color } from '../../styles';
import { Button } from '../Button';

export interface IStBackButtonProps {
	left?: boolean;
}
export const StBackButton = styled(Button)<IStBackButtonProps>`
	cursor: pointer;
	color: ${color('white')};
	width: 40px;
	height: 40px;

	${(props) =>
		props.left &&
		`
		position: absolute;
		left: 10px;
		top: 10px;
		background: ${color('bg')(props)};
		border-radius: 50%;
	`}
`;
