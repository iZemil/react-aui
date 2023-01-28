import * as React from 'react';

import { S } from './Styled';
import { InputLabelProps, InputProps } from './types';

export const InputLabel = (props: InputLabelProps) => {
	const { children, error, id, size } = props;

	return children || error ? (
		<S.Label.$ htmlFor={id} error={error} size={size}>
			{children}
			{error ? <S.Error.$>{`${children ? ' – ' : ''}${error}`}</S.Error.$> : ''}
		</S.Label.$>
	) : null;
};

export function Input(props: InputProps) {
	const {
		id = React.useId(),
		label,
		value,
		placeholder,
		size = 'medium',
		disabled = false,
		error,
		htmlType,
		prefix,
		suffix,
		onChange,
		...rest
	} = props;

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value, e);
		}
	}, []);

	return (
		<S.$>
			<InputLabel id={id} error={error} size={size}>
				{label}
			</InputLabel>

			<S.Value.Wrapper.$>
				{prefix && <S.Prefix.$>{prefix}</S.Prefix.$>}
				<S.Value.$
					id={id}
					placeholder={placeholder}
					disabled={disabled}
					value={value}
					type={htmlType}
					error={error}
					size={size as unknown as undefined}
					onChange={handleChange}
					{...rest}
				/>

				{suffix && <S.Suffix.$>{suffix}</S.Suffix.$>}
			</S.Value.Wrapper.$>
		</S.$>
	);
}
