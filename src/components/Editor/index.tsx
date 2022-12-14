import * as React from 'react';

import { Preview } from './Preview';
import { S } from './Styled';

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
	require('hypermd');
}

export type EditorProps = {
	value?: string;
	onChange?: (md: string) => void;
	preview?: boolean;
};

const options = {
	mode: 'hypermd',
	// mode: 'gfm',
	theme: 'hypermd-light',

	hmdFold: {
		image: true,
		link: true,
	},
	hmdHideToken: true,
	hmdCursorDebounce: true,
	hmdPaste: true,
	hmdClick: true,
	hmdHover: true,
	hmdTableAlign: true,
	lineWrapping: true,
};

/**
 * @docs hypermd: https://github.com/laobubu/HyperMD/blob/master/docs/index.md
 */
export const Editor = (props: EditorProps) => {
	const { value = '', onChange, preview } = props;

	const handleChange = React.useCallback((value: string) => {
		if (onChange) {
			onChange(value);
		}
	}, []);

	if (preview) {
		return <Preview value={value} />;
	}

	return <S.$ value={value} onChange={handleChange} options={options} />;
};
