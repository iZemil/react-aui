import * as React from 'react';

import { InputLabel } from '../Input';
import { InputLabelProps, TOmitInputProps } from '../Input/types';

import { Preview } from './Preview';
import { S } from './Styled';

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
	require('hypermd');
}

export type EditorProps = {
	value?: string;
	onChange?: (md: string) => void;
	preview?: boolean;
	label?: InputLabelProps['children'];
} & Partial<Omit<InputLabelProps, 'children'>> &
	Partial<Omit<React.HTMLProps<HTMLTextAreaElement>, TOmitInputProps>>;

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
	const { id = React.useId(), size = 'medium', label, error, value = '', onChange, preview } = props;

	const handleChange = (value: string) => {
		if (onChange) {
			onChange(value);
		}
	};

	if (preview) {
		return <Preview value={value} />;
	}

	return (
		<>
			<InputLabel id={id} error={error} size={size}>
				{label}
			</InputLabel>
			<S.$ value={value} onChange={handleChange} options={options} />
		</>
	);
};
