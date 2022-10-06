import * as React from 'react';

import { ButtonProps } from '../Button/types';
import { DropdownProps, Option } from '../Dropdown';
import { Icon } from '../Icon';

import S from './Styled';

export type SelectProps = DropdownProps;

export const Select = (props: SelectProps) => {
	return <S.$ {...props} />;
};

export interface SelectLabelProps extends ButtonProps {
	placeholder: React.ReactNode;
}
const SelectLabel = (props: SelectLabelProps) => {
	const { placeholder, children, ...rest } = props;

	return (
		<S.Label.$ color="white" {...rest}>
			{children ?? placeholder}
			<Icon.Base.ChevronDown />
		</S.Label.$>
	);
};

Select.Label = SelectLabel;
Select.Option = Option;
