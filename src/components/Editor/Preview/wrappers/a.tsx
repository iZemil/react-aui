import * as React from 'react';

import { Link } from '../../../Link';

export const AWrapper = (_props: { className?: string; children: React.ReactNode[]; href?: string }) => {
	const { children, href = '#' } = _props;

	return (
		<Link to={href} blank>
			{children[0]}
		</Link>
	);
};
