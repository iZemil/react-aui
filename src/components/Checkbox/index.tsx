import { Icons } from '../icons';

import Styled, { IStyledProps } from './Styled';

export interface ICheckboxProps extends IStyledProps {
	checked: boolean;
	onClick?: (checked: boolean) => void;
	className?: string;
}

export const Checkbox = ({ checked, $disabled, onClick, ...rest }: ICheckboxProps) => {
	return (
		<Styled.$
			$disabled={$disabled}
			onClick={() => {
				if (onClick) {
					onClick(!checked);
				}
			}}
			{...rest}
		>
			{checked ? <Icons.Checked /> : <Icons.NotChecked />}
		</Styled.$>
	);
};
