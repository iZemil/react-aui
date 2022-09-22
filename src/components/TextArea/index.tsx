import * as React from 'react';

import { IStTextArea, StTextArea, StTextAreaLabel, StTextAreaWrapper } from './Styled';

export interface ITextAreaProps extends Omit<IStTextArea, 'onChange'> {
	className?: string;
	label?: string;
	value?: string;
	placeholder?: string;
	onChange: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ className, label, placeholder, value, onChange }: ITextAreaProps) {
	return (
		<StTextAreaWrapper>
			{label && <StTextAreaLabel>{label}</StTextAreaLabel>}

			<StTextArea
				className={className}
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value, e)}
			/>
		</StTextAreaWrapper>
	);
}
