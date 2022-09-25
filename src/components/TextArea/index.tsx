import * as React from 'react';

import { InputLabel } from '../Input';
import { InputLabelProps, TOmitInputProps } from '../Input/types';
import { Ripple } from '../Ripple';
import { useRipple } from '../Ripple/useRipple';

import S from './Styled';

export type TextAreaProps = {
	value?: string;
	placeholder?: string;
	hint?: React.ReactNode;
	onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & Partial<InputLabelProps> &
	Partial<Omit<React.HTMLProps<HTMLTextAreaElement>, TOmitInputProps>>;

export function TextArea(props: TextAreaProps) {
	const { id = React.useId(), size = 'medium', label, placeholder, value, error, onChange, hint, ...rest } = props;
	const [ripple, handleRipple] = useRipple();

	return (
		<S.$>
			<InputLabel id={id} label={label} error={error} size={size} />

			<S.Value.Wrapper.$>
				<S.Value.$
					{...rest}
					error={error}
					size={size}
					value={value}
					placeholder={placeholder}
					onClick={(e) => {
						handleRipple(e);
					}}
					onChange={(e) => {
						if (onChange) {
							onChange(e.target.value, e);
						}
					}}
				/>
				<Ripple meta={ripple} />
			</S.Value.Wrapper.$>

			{hint}
		</S.$>
	);
}
