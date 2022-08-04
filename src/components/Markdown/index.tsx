import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Position, SpecialComponents } from 'react-markdown/lib/ast-to-react';
import remarkGfm from 'remark-gfm';
import { ESize } from '../../styles';

import { Checkbox } from '../Checkbox';

import Styled from './Styled';

export interface IMarkdownProps {
	md: string;
	size?: ESize;
	label?: string;
	onCheck?: (newMd: string) => void;
}

const onChangeCheckbox = (md: string, sourcePosition: Position, checked: boolean): string => {
	const offset = sourcePosition.start.offset!;
	const prefix = md.slice(0, offset);

	return prefix + md.slice(offset).replace(/^([-+*]\s+)\[[x ]\](\s)/, `$1[${checked ? 'x' : ' '}]$2`);
};

export const Markdown = ({ md, label, onCheck, ...rest }: IMarkdownProps) => {
	// !COPIED: https://github.com/remarkjs/react-markdown/issues/607#issuecomment-864361480
	const ListWrapper: SpecialComponents['li'] = ({
		checked,
		index,
		ordered,
		node,
		sourcePosition,
		siblingCount,
		className,
		children,
	}) => {
		const props = { className, children };

		const isCheckbox = typeof checked === 'boolean';
		const isOrdered = typeof ordered === 'boolean';

		if (checked == null) {
			return React.createElement('li', props);
		}

		return React.createElement(
			'li',
			props,
			React.Children.map(children, (child) => {
				const isCheckboxEl =
					child &&
					typeof child === 'object' &&
					'type' in child &&
					child.type === 'input' &&
					child.props.type === 'checkbox';

				if (isCheckboxEl) {
					return (
						<Checkbox
							checked={child.props.checked}
							onClick={(checked) => {
								if (onCheck) {
									const newMd = onChangeCheckbox(md, sourcePosition as Position, checked);

									onCheck(newMd);
								}
							}}
						/>
					);
				}

				return child;
			})
		);
	};

	return (
		<Styled.$ {...rest}>
			{label && <Styled.Label.$>{label}</Styled.Label.$>}

			<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ li: ListWrapper }} rawSourcePos children={md} />
		</Styled.$>
	);
};
