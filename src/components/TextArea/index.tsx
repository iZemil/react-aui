import * as React from 'react';

import { InputLabel } from '../Input';
import { InputLabelProps, TOmitInputProps } from '../Input/types';

import S from './Styled';

export type TextAreaProps = {
	value?: string;
	placeholder?: string;
	hint?: React.ReactNode;
	ref?: React.RefObject<HTMLTextAreaElement>;
	onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & Partial<InputLabelProps> &
	Partial<Omit<React.HTMLProps<HTMLTextAreaElement>, TOmitInputProps>>;

export function TextArea(props: TextAreaProps) {
	const { id = React.useId(), size = 'medium', label, placeholder, value, error, onChange, hint, ...rest } = props;

	return (
		<S.$>
			<InputLabel id={id} label={label} error={error} size={size} />

			<S.Textarea.$
				{...rest}
				id={id}
				error={error}
				size={size}
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					if (onChange) {
						onChange(e.target.value, e);
					}
				}}
			/>

			{hint}
		</S.$>
	);
}
