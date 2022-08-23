import { Button } from '..';
import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { color } from '../../../styles';
import { Icons } from '../../icons';
import { IButtonProps } from '../types';

export interface ISBackButtonProps {
	left?: boolean;
}

const S = {
	$: styled(Button)<ISBackButtonProps>`
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
	`,
};

type IProps = ISBackButtonProps & Partial<IButtonProps>;

// TODO#0: если открыть новую страницу и кликнуть нежелатльное поведение
export function BackButton(props: IProps) {
	const { left } = props;
	const navigate = useNavigate();

	return (
		<S.$
			type={props.type ?? 'text'}
			circle
			onClick={() => {
				navigate(-1);
			}}
			left={left}
		>
			<Icons.BackButton />
		</S.$>
	);
}
