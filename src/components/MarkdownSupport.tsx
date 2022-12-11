import styled from 'styled-components';

import { padding } from '../styles';

import { Button } from './Button';
import { Icon } from './Icon';

const S = {
	$: styled.div`
		display: flex;
		gap: ${padding('medium')};
		align-items: center;
		justify-content: flex-end;

		button {
			font-size: 12px;
		}
	`,
};

export const MARKDOWN_SUPPORT_LINK = 'https://www.markdownguide.org/basic-syntax';

export const MarkdownSupport = () => {
	return (
		<S.$>
			<Button size="small" type="text" color="grey" to={MARKDOWN_SUPPORT_LINK} blank>
				Markdown is supported
				<Icon icon={Icon.base.Markdown} size="small" />
			</Button>
		</S.$>
	);
};
