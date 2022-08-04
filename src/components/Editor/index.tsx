import { useRef } from 'react';

import { EButton } from '../Button';
import { Icons } from '../icons';
import { ESize } from '../../styles';

import Styled from './Styled';

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
	const inputEl: React.RefObject<HTMLTextAreaElement> = useRef(null);

	const handleClickBtn = (val: string) => {
		onChange(val);

		if (inputEl?.current) {
			inputEl.current.focus();
		}
	};

	return (
		<Styled.Wrapper.$>
			{label && <Styled.Label.$>{label}</Styled.Label.$>}
			<Styled.$ {...rest}>
				<Styled.Input.$
					ref={inputEl}
					placeholder={placeholder}
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>

				{withTools && (
					<Styled.Tools.$>
						<Styled.Tools.Btn.$
							kind={EButton.Ghost}
							size={ESize.small}
							onClick={() => {
								handleClickBtn(value + '``');
							}}
						>
							<Icons.AddCode size={ICON_SIZE} />
						</Styled.Tools.Btn.$>

						<Styled.Tools.Btn.$
							kind={EButton.Ghost}
							size={ESize.small}
							onClick={() => {
								handleClickBtn(value + '\n- ');
							}}
						>
							<Icons.AddListItem size={ICON_SIZE} />
						</Styled.Tools.Btn.$>

						<Styled.Tools.Btn.$
							kind={EButton.Ghost}
							size={ESize.small}
							onClick={() => {
								handleClickBtn(value + '\n- [ ] ');
							}}
						>
							<Icons.AddCheckbox size={ICON_SIZE} />
						</Styled.Tools.Btn.$>
					</Styled.Tools.$>
				)}
			</Styled.$>
		</Styled.Wrapper.$>
	);
};
