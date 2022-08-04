import Styled, { IStInput } from './Styled';

export interface IInputProps extends Omit<IStInput, 'onChange'> {
	value?: string | number;
	onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	label?: string | React.ReactElement;
	error?: string;
}

export function Input({ type, className, label, value, error, placeholder, disabled, onChange }: IInputProps) {
	return (
		<Styled.$>
			{label && (
				<Styled.Label.$ error={error}>
					{label}
					{error && <Styled.Error.$> - {error}</Styled.Error.$>}
				</Styled.Label.$>
			)}

			<Styled.Input.$
				type={type}
				placeholder={placeholder}
				className={className}
				value={value}
				disabled={disabled}
				onChange={(e) => {
					if (onChange) {
						onChange(e.target.value, e);
					}
				}}
				error={error}
			/>
		</Styled.$>
	);
}
