import { Input } from '.';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '../Button';
import Container from '../Container';
import { Icons } from '../icons';

export default {
	component: Input,
};

export const Type = () => {
	const [value, setValue] = useState('');

	return (
		<Container.$ style={{ alignItems: 'flex-end' }}>
			<Input label="Default" value={value} onChange={setValue} />
			<Button
				onClick={() => {
					setValue('');
				}}
			>
				Click
			</Button>
		</Container.$>
	);
};

export const Size = () => {
	const [value, setValue] = useState('');

	return (
		<Container.$>
			<Input size="small" label={'small'} value={value} onChange={setValue} />
			<Input size="medium" label={'medium'} value={value} onChange={setValue} />
			<Input size="large" label={'large'} value={value} onChange={setValue} />
		</Container.$>
	);
};

export const Other = () => {
	return (
		<Container.$ column>
			<Input label="email" error="some error" />
			<Input error="without label error" />
			<Input label="password" htmlType="password" />
			<Input label="number" htmlType="number" />

			<Input
				label="label"
				placeholder="prefix"
				prefix={
					<Button icon>
						<Icons.Person />
					</Button>
				}
			/>
			<Input
				label="label"
				placeholder="suffix"
				suffix={
					<Button icon>
						<Icons.Person />
					</Button>
				}
			/>
			<Input
				label="prefix"
				placeholder="suffix"
				error="error"
				prefix={
					<Button icon>
						<Icons.Person />
					</Button>
				}
				suffix={
					<Button icon>
						<Icons.Hide />
					</Button>
				}
			/>
		</Container.$>
	);
};
