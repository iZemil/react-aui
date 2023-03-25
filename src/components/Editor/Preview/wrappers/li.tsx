import * as React from 'react';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';

import { Checkbox } from '../../../Checkbox';

export const LiWrapper: SpecialComponents['li'] = (_props: {
	className?: string;
	checked: boolean | null;
	ordered: boolean | null;
	index: number;
	children: React.ReactNode[];
}) => {
	const { className, checked, children } = _props;
	const props = { className, children };

	if (className === 'task-list-item') {
		return <Checkbox value={Boolean(checked)}>{children.slice(2).join(' ')}</Checkbox>;
	}

	return React.createElement('li', props);
};
