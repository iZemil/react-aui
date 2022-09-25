import * as React from 'react';

import { TAUIColors } from '../../styles';
import { Icons } from '../icons';

import S from './Styled';

export interface CheckboxProps {
	children?: React.ReactNode;
	checked?: boolean;
	onClick?: (checked: boolean) => void;
	disabled?: boolean;
	color?: TAUIColors;
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
			<S.Icon.$ color={color}>{checked ? <Icons.Checked /> : <Icons.NotChecked />}</S.Icon.$>

			{children}
		</S.$>
	);
};
