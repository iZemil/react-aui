import * as React from 'react';

import { Icons } from '../icons';

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
	const ICON_SIZE = Icons.SIZE.MEDIUM;
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
							<Icons.AddCode size={ICON_SIZE} />
						</S.Tools.Btn.$>

						<S.Tools.Btn.$
							type="text"
							size="small"
							onClick={() => {
								handleClickBtn(value + '\n- ');
							}}
						>
							<Icons.AddListItem size={ICON_SIZE} />
						</S.Tools.Btn.$>

						<S.Tools.Btn.$
							type="text"
							size="small"
							onClick={() => {
								handleClickBtn(value + '\n- [ ] ');
							}}
						>
							<Icons.AddCheckbox size={ICON_SIZE} />
						</S.Tools.Btn.$>
					</S.Tools.$>
				)}
			</S.$>
		</S.Wrapper.$>
	);
};
