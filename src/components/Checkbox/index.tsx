import * as React from 'react';

import { TColors } from '../../styles';
import { Icon } from '../Icon';

import { S, SIZE } from './Styled';

export interface CheckboxProps {
	children?: React.ReactNode;
	value?: boolean;
	onChange?: (value: boolean) => void;
	disabled?: boolean;
	color?: TColors;
}

export const Checkbox = ({ value, disabled, children, color = 'black', onChange, ...rest }: CheckboxProps) => {
	return (
		<S.$
			color={color}
			disabled={disabled}
			onClick={() => {
				if (onChange) {
					onChange(!value);
				}
			}}
			{...rest}
		>
			<S.Icon.$ color={color}>{value && <Icon.Check size={SIZE - 2} />}</S.Icon.$>

			{children}
		</S.$>
	);
};
