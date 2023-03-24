import * as React from 'react';

import { TColors } from '../../styles';

import S from './Styled';

export interface CheckboxProps {
	children?: React.ReactNode;
	checked?: boolean;
	onClick?: (checked: boolean) => void;
	disabled?: boolean;
	color?: TColors;
}

export const Checkbox = ({ checked, disabled, children, color = 'text', onClick, ...rest }: CheckboxProps) => {
	return (
		<S.$
			color={color}
			disabled={disabled}
			onClick={() => {
				if (onClick) {
					onClick(!checked);
				}
			}}
			{...rest}
		>
			<S.Icon.$ color={color}>{checked ? 1 : 0}</S.Icon.$>

			{children}
		</S.$>
	);
};
