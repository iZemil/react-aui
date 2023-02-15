import * as codemirror from 'codemirror';
import * as React from 'react';
import { IControlledCodeMirror } from 'react-codemirror2';

import { InputLabel } from '../Input';
import { InputLabelProps } from '../Input/types';

import { Preview } from './Preview';
import { S } from './Styled';

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
	require('hypermd');
}

export type EditorProps = {
	value?: string;
	onChange?: (md: string, editor: codemirror.Editor, data: codemirror.EditorChange) => void;
	preview?: boolean;
	label?: InputLabelProps['children'];
} & Partial<Omit<InputLabelProps, 'children'>> &
	Partial<Omit<IControlledCodeMirror, 'onChange'>>;

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
	const { id = React.useId(), size = 'medium', label, error, value = '', onChange, preview, ...rest } = props;

	const handleChange = (value: string, editor: codemirror.Editor, data: codemirror.EditorChange) => {
		if (onChange) {
			onChange(value, editor, data);
		}
	};

	if (preview) {
		return <Preview value={value} />;
	}

	return (
		<S.$>
			<InputLabel id={id} error={error} size={size}>
				{label}
			</InputLabel>

			<S.Input.$
				value={value}
				onBeforeChange={(editor, data, value) => {
					handleChange(value, editor, data);
				}}
				options={options}
				{...rest}
			/>
		</S.$>
	);
};
