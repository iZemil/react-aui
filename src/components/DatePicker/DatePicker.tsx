// import { ru } from 'date-fns/locale';
import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import Styled from './Styled';

interface IDatePickerProps {
	label?: React.ReactNode;
	locale?: string; // string | Locale;
	date?: Date;
	onChange: (value: Date) => void;
}

// @docs: https://reactdatepicker.com
export const DatePicker = ({ onChange, date, label, locale }: IDatePickerProps) => {
	return (
		<Styled.Wrapper.$>
			{label && <Styled.Label.$>{label}</Styled.Label.$>}

			<Styled.$
				locale={locale}
				dateFormat="dd MMMM yyyy"
				selected={date}
				// showYearSelect
				// scrollableYearSelect
				onChange={(d: Date) => {
					onChange(d);
				}}
			/>
		</Styled.Wrapper.$>
	);
};
