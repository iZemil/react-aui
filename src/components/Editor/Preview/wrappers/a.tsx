import * as React from 'react';

export const AWrapper = (_props: { className?: string; children: React.ReactNode[]; href?: string }) => {
	const { children, href = '#' } = _props;

	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children[0]}
		</a>
	);
};
