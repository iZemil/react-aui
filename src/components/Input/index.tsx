import * as React from 'react';

import { S } from './Styled';
import { InputLabelProps, InputProps } from './types';

export const InputLabel = (props: InputLabelProps) => {
	const { label, error, id, size } = props;

	return label || error ? (
		<S.Label.$ htmlFor={id} error={error} size={size}>
			{label}
			{error ? <S.Error.$>{`${label ? ' – ' : ''}${error}`}</S.Error.$> : ''}
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

	return (
		<S.$>
			<InputLabel id={id} label={label} error={error} size={size} />

			<S.Value.Wrapper.$>
				{prefix && <S.Prefix.$>{prefix}</S.Prefix.$>}
				<S.Value.$
					id={id}
					placeholder={placeholder}
					disabled={disabled}
					value={value}
					type={htmlType}
					error={error}
					// @ts-ignore
					size={size}
					onChange={(e) => {
						if (onChange) {
							onChange(e.target.value, e);
						}
					}}
					{...rest}
				/>
				{suffix && <S.Suffix.$>{suffix}</S.Suffix.$>}
			</S.Value.Wrapper.$>
		</S.$>
	);
}
