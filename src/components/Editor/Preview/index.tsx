import * as React from 'react';
import remarkGfm from 'remark-gfm';

import { S } from './Styled';
import { AWrapper, CodeWrapper, LiWrapper } from './wrappers';

export interface IMarkdownProps {
	value: string;
}

export const Preview = ({ value, ...rest }: IMarkdownProps) => {
	return (
		<S.$
			// plugins: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
			remarkPlugins={[remarkGfm]}
			components={{ li: LiWrapper, code: CodeWrapper, a: AWrapper }}
			rawSourcePos
			{...rest}
		>
			{value}
		</S.$>
	);
};
