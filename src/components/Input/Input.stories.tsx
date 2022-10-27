import { Input } from '.';
import { Icon } from '..';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Input,
};

export const Type = () => {
	const [value, setValue] = React.useState('');

	return (
		<Container style={{ alignItems: 'flex-end' }}>
			<Input label="Default" value={value} onChange={setValue} />
		</Container>
	);
};

export const Size = () => {
	const [value, setValue] = React.useState('');

	return (
		<Container
			style={{
				alignItems: 'flex-end',
			}}
		>
			<Input size="small" placeholder="small" label={'small'} value={value} onChange={setValue} />
			<Input size="medium" placeholder="medium" label={'medium'} value={value} onChange={setValue} />
			<Input size="large" placeholder="large" label={'large'} value={value} onChange={setValue} />
		</Container>
	);
};

export const HtmlType = () => {
	return (
		<Container column>
			<Input label="email" htmlType="email" />
			<Input label="password" htmlType="password" />
			<Input label="number" htmlType="number" />
			<Input label="search" htmlType="search" />
		</Container>
	);
};

export const Other = () => {
	return (
		<Container column>
			<Input placeholder="No label" />

			<Input
				label={
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<Icon.base.EmptyAvatar />
						Custom label
					</div>
				}
				error="Some error occurred"
			/>

			<Input error="Without label Error" />

			<Input
				label="Prefix"
				placeholder="Write a message"
				prefix={
					<Button icon>
						<Icon.base.Person />
					</Button>
				}
			/>
			<Input
				label="Suffix"
				placeholder="Write a message"
				suffix={
					<Button icon>
						<Icon.base.Hide />
					</Button>
				}
			/>
			<Input
				label="Prefix/Suffix"
				placeholder="Write a message"
				error="error"
				prefix={
					<Button icon>
						<Icon.base.Person />
					</Button>
				}
				suffix={
					<Button icon>
						<Icon.base.Hide />
					</Button>
				}
			/>
		</Container>
	);
};
