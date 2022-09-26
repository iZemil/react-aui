import * as React from 'react';

import { Icon } from '../Icon';

import S from './Styled';

export interface IEditorProps {
	value: string;
	placeholder: string;
	onChange: (md: string) => void;
	withTools?: boolean;
	label?: string;
}

// TODO#0: когда есть пуст. строка между чекбоксам - ненужное поведение отображения
export const Editor = ({ label, value, onChange, placeholder, withTools, ...rest }: IEditorProps) => {
	const inputEl: React.RefObject<HTMLTextAreaElement> = React.useRef(null);

	const handleClickBtn = (val: string) => {
		onChange(val);

		if (inputEl?.current) {
			inputEl.current.focus();
		}
	};

	return (
		<S.Wrapper.$>
			{label && <S.Label.$>{label}</S.Label.$>}

			<S.$ {...rest}>
				<S.Input.$
					ref={inputEl}
					placeholder={placeholder}
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>

				{withTools && (
					<S.Tools.$>
						<S.Tools.Btn.$
							type="text"
							size="small"
							onClick={() => {
								handleClickBtn(value + '``');
							}}
						>
							<Icon.Base.AddCode size="medium" />
						</S.Tools.Btn.$>

						<S.Tools.Btn.$
							type="text"
							size="small"
							onClick={() => {
								handleClickBtn(value + '\n- ');
							}}
						>
							<Icon.Base.AddListItem size="medium" />
						</S.Tools.Btn.$>

						<S.Tools.Btn.$
							type="text"
							size="small"
							onClick={() => {
								handleClickBtn(value + '\n- [ ] ');
							}}
						>
							<Icon.Base.AddCheckbox size="medium" />
						</S.Tools.Btn.$>
					</S.Tools.$>
				)}
			</S.$>
		</S.Wrapper.$>
	);
};
