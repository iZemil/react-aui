import React from 'react';

import { TSize } from '../../styles';

export interface InputLabelProps {
	label?: React.ReactNode;
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
	onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<InputLabelProps> &
	Partial<Omit<React.HTMLProps<HTMLInputElement>, TOmitInputProps>>;
