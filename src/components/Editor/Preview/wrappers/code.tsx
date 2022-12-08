import * as React from 'react';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';

export const CodeWrapper: SpecialComponents['code'] = (_props: { className?: string; children: React.ReactNode[] }) => {
	const { children, className = 'language-javascript' } = _props;

	return (
		<SyntaxHighlighter language={className.split('-')[1]} style={codeTheme}>
			{children[0] as string}
		</SyntaxHighlighter>
	);
};
