import * as React from 'react';

import { Markdown } from '../../Markdown';

export const Timer = () => {
	return (
		<Markdown
			value={`use hook to create your own Timer\n\n\`const { timer, start, ...rest } = useTimer(msValue, onFinish);\``}
		/>
	);
};
