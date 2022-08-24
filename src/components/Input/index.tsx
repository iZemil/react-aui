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
		prefix,
		suffix,
		onChange,
		...rest
	} = props;

	const withValue = Boolean(value);
	const withError = Boolean(error);
	const isActiveLabel = withValue || withError || Boolean(placeholder);
	const withMarginTop = Boolean(label || error);

	return (
		<S.Wrapper.$ marginTop={withMarginTop} className={className}>
			{suffix && <S.Suffix.$>{suffix}</S.Suffix.$>}

			<S.Input.Wrapper.$>
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

				<S.Label.$ htmlFor={id} error={error} size={size} active={isActiveLabel}>
					{label}
					{withError ? <S.Error.$>{`${label ? ' - ' : ''}${error}`}</S.Error.$> : ''}
				</S.Label.$>
			</S.Input.Wrapper.$>

			{prefix && <S.Prefix.$>{prefix}</S.Prefix.$>}
		</S.Wrapper.$>
	);
}
