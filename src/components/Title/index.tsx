import * as React from 'react';

import { S, SProps } from './Styled';

export type TitleProps = {
	children: React.ReactNode;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
} & Partial<SProps>;

type TH = boolean | undefined;
const getAs = (...hArgs: [TH, TH, TH, TH, TH]): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' => {
	const [h1, h2, h3, h4, h5] = hArgs;

	if (h1) {
		return 'h1';
	}
	if (h2) {
		return 'h2';
	}
	if (h3) {
		return 'h3';
	}
	if (h4) {
		return 'h4';
	}
	if (h5) {
		return 'h5';
	}

	return 'h1';
};

export const Title = ({ children, h1, h2, h3, h4, h5, color = 'text', ...rest }: TitleProps) => {
	return (
		<S.$ as={getAs(h1, h2, h3, h4, h5)} color={color} {...rest}>
			{children}
		</S.$>
	);
};
