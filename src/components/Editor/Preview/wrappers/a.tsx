import * as React from 'react';
import styled from 'styled-components';

import { color } from '../../../../styles';

const S = {
	$: styled.a`
		color: ${color('main')};
	`,
};

export const AWrapper = (_props: { className?: string; children: React.ReactNode[]; href?: string }) => {
	const { children, href = '#' } = _props;

	return (
		<S.$ href={href} target="_blank" rel="noopener noreferrer">
			{children[0]}
		</S.$>
	);
};
