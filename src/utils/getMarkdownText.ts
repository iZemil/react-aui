import { marked } from 'marked';

export const getMarkdownText = (value: string) => {
	const rawMarkup = marked(value);
	return { __html: rawMarkup };
};
