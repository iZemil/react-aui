import { TextArea } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: TextArea,
};

export const Basic = () => {
	const [value, setValue] = React.useState('');

	return (
		<Container column>
			<TextArea label="Textarea" onChange={setValue} value={value} />

			<TextArea label="Message" error="Some error" rows={1} />

			<TextArea
				label="Max length"
				onChange={setValue}
				maxLength={10}
				rows={2}
				hint={
					<span
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							color: 'grey',
							fontSize: '12px',
						}}
					>
						{value.length}/{10}
					</span>
				}
			/>

			<TextArea
				label={
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<b>Custom</b> label
					</div>
				}
				error="Some error"
				rows={1}
			/>

			<TextArea size="small" placeholder="small" />
			<TextArea size="large" placeholder="large" />
		</Container>
	);
};
