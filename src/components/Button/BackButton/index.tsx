import { Button } from '..';
import * as React from 'react';
import { useNavigate } from 'react-router';

import { Icon } from '../../Icon';
import { ButtonProps } from '../types';

type BackButtonProps = Partial<ButtonProps>;

// TODO#0: если открыть новую страницу и кликнуть нежелатльное поведение
export function BackButton(props: BackButtonProps) {
	const navigate = useNavigate();

	return (
		<Button {...props} icon type={props.type ?? 'text'} circle onClick={() => navigate(-1)}>
			<Icon.Base.ArrowLeft />
		</Button>
	);
}
