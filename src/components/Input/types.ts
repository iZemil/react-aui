import React from 'react';

import { TSize } from '../../styles';

export interface InputLabelProps {
	children?: React.ReactNode;
	error?: string;
	id?: string;
	size?: TSize;
}

export type TOmitInputProps = 'error' | 'size' | 'onChange' | 'prefix' | 'label' | 'ref' | 'as';

export type InputProps = {
	htmlType?: 'password' | 'number' | 'email' | 'search';
	placeholder?: string;
	disabled?: boolean;
	value?: string | number;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	label?: InputLabelProps['children'];
	onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<Omit<InputLabelProps, 'children'>> &
	Partial<Omit<React.HTMLProps<HTMLInputElement>, TOmitInputProps>>;
