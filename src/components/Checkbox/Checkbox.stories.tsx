import { useState } from 'react';
import { Checkbox } from '.';

export default {
	component: Checkbox,
	args: {
		checked: false,
	},
};

export const Example = () => {
	const [checked, toggle] = useState(false);

	return (
		<Checkbox
			checked={checked}
			onClick={() => {
				toggle(!checked);
			}}
		/>
	);
};
