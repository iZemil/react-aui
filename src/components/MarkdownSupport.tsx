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

interface IProps {
	text?: string;
	href?: string;
}

export const MarkdownSupport = (props: IProps) => {
	const { text = 'Markdown is supported', href = 'https://www.markdownguide.org/basic-syntax' } = props;

	return (
		<S.$>
			<Button size="small" type="text" color="grey" to={href} blank>
				{text}
				<Icon icon={Icon.base.Markdown} size="small" />
			</Button>
		</S.$>
	);
};
