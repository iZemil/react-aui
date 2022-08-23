import * as React from 'react';

import S from './Styled';
import { IInputProps } from './types';

export function Input(props: IInputProps) {
	const {
		id = React.useId(),
		className,
		label,
		value,
		placeholder,
		size = 'medium',
		disabled = false,
		error,
		htmlType,
		onChange,
		...rest
	} = props;

	const withValue = Boolean(value);
	const withError = Boolean(error);

	return (
		<S.Wrapper.$ className={className}>
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

			<S.Label.$ htmlFor={id} error={error} size={size} active={withValue || withError}>
				{label}
				{withError ? <S.Error.$>{` - ${error}`}</S.Error.$> : ''}
			</S.Label.$>
		</S.Wrapper.$>
	);
}
