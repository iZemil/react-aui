import * as React from 'react';

import { InputLabel } from '../Input';
import { InputLabelProps, TOmitInputProps } from '../Input/types';

import S from './Styled';

export type TextAreaProps = {
	value?: string;
	placeholder?: string;
	hint?: React.ReactNode;
	ref?: React.RefObject<HTMLTextAreaElement>;
	label?: InputLabelProps['children'];
	onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & Partial<Omit<InputLabelProps, 'children'>> &
	Partial<Omit<React.HTMLProps<HTMLTextAreaElement>, TOmitInputProps>>;

export function TextArea(props: TextAreaProps) {
	const { id = React.useId(), size = 'medium', label, placeholder, value, error, onChange, hint, ...rest } = props;

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(e.target.value, e);
		}
	}, []);

	return (
		<S.$>
			<InputLabel id={id} error={error} size={size}>
				{label}
			</InputLabel>

			<S.Textarea.$
				{...rest}
				id={id}
				error={error}
				size={size}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>

			{hint}
		</S.$>
	);
}
