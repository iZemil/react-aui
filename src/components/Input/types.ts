import React from 'react';

import { TSize } from '../../styles';

export interface ISInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	$size: TSize;
	$error?: string;
}

export interface IInputProps {
	htmlType?: 'password' | 'number' | 'email' | 'search';
	id?: string;
	size?: TSize;
	placeholder?: string;
	error?: string;
	disabled?: boolean;
	className?: string;
	label?: string | React.ReactElement;
	value?: string | number;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}
