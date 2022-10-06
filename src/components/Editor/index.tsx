import * as React from 'react';

import { Icon } from '../Icon';
import { MARKDOWN_SUPPORT_LINK } from '../MarkdownSupport';
import { TextAreaProps } from '../TextArea';

import S from './Styled';

export type IEditorProps = Partial<Omit<TextAreaProps, 'onChange'>> & {
	onChange: (md: string) => void;
	tools?: boolean;
	bottomBar?: React.ReactNode;
};

// TODO#0: когда есть пуст. строка между чекбоксам - ненужное поведение отображения
export const Editor = ({ value, onChange, tools, label, ...rest }: IEditorProps) => {
	// TODO: error with ref to textarea
	// const inputEl: React.RefObject<HTMLTextAreaElement> = React.useRef(null);

	const handleClickBtn = (type: 'code' | 'list' | 'checkbox' | 'bold' | 'italic' | 'heading' | 'link') => {
		let newVal: string;

		switch (type) {
			case 'code': {
				newVal = value + '``';
				break;
			}
			case 'list': {
				newVal = value + '\n- ';
				break;
			}
			case 'checkbox': {
				newVal = value + '\n- [ ] ';
				break;
			}
			case 'bold': {
				newVal = value + '****';
				break;
			}
			case 'italic': {
				newVal = value + '__';
				break;
			}
			case 'heading': {
				newVal = value + '### ';
				break;
			}
			case 'link': {
				newVal = value + '[](url)';
				break;
			}
			default:
				newVal = '';
		}

		onChange(newVal);

		// if (inputEl?.current) {
		// 	inputEl.current.focus();
		// }
	};

	return (
		<S.$>
			<S.Input.$
				// ref={inputEl}
				label={
					<S.Head.$>
						{label ? <S.Label.$>{label}</S.Label.$> : null}
						{tools && (
							<S.Tools.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('heading')} title="Add heading text">
									<Icon icon={Icon.Base.AddHeading} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('bold')} title="Add bold text">
									<Icon icon={Icon.Base.Bold} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('italic')} title="Add italic text">
									<Icon icon={Icon.Base.Italic} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('list')} title="Add a list item">
									<Icon icon={Icon.Base.AddListItem} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('link')} title="Add link">
									<Icon icon={Icon.Base.Link} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ onClick={() => handleClickBtn('code')} title="Add code">
									<Icon icon={Icon.Base.AddCode} />
								</S.Tools.Btn.$>
								<S.Tools.Btn.$ to={MARKDOWN_SUPPORT_LINK} blank title="Markdown info">
									<Icon icon={Icon.Base.Markdown} />
								</S.Tools.Btn.$>
								{/* <S.Tools.Btn.$ onClick={() => handleClickBtn('checkbox')}>
									<Icon icon={Icon.Base.AddCheckbox} />
								</S.Tools.Btn.$> */}
							</S.Tools.$>
						)}
					</S.Head.$>
				}
				value={value}
				onChange={onChange}
				{...rest}
			/>

			{/* <S.Bottom.$></S.Bottom.$> */}
		</S.$>
	);
};
