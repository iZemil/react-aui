import * as React from 'react';

import S from './Styled';
import { IInputProps } from './types';

export function Input(props: IInputProps) {
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

	const withError = Boolean(error);

	return (
		<S.Wrapper.$>
			<S.Label.$ htmlFor={id} error={error} size={size}>
				{label}
				{withError ? <S.Error.$>{`${label ? ' – ' : ''}${error}`}</S.Error.$> : ''}
			</S.Label.$>

			<S.Input.Wrapper.$>
				{prefix && <S.Prefix.$>{prefix}</S.Prefix.$>}
				<S.Input.$
					id={id}
					placeholder={placeholder}
					disabled={disabled}
					value={value}
					type={htmlType}
					$error={error}
					$size={size}
					onChange={(e) => {
						if (onChange) {
							onChange(e.target.value, e);
						}
					}}
					{...rest}
				/>
				{suffix && <S.Suffix.$>{suffix}</S.Suffix.$>}
			</S.Input.Wrapper.$>
		</S.Wrapper.$>
	);
}
