import { DefaultDropdownLabel, Dropdown, IDropdownItem } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';
import { Icons } from '../icons';

export default {
	component: Dropdown,
};

const defaultBasicState = {
	first: false,
	second: false,
	third: false,
	fourth: false,
};

export const Basic = () => {
	const [values, setValues] = React.useState(defaultBasicState);

	const onChange = (key: keyof typeof defaultBasicState, value: boolean) => {
		setValues({
			...values,
			[key]: value,
		});
	};

	const items: IDropdownItem[] = [
		{ text: 'create', size: 'small' },
		{ text: 'read', size: 'small' },
		{
			text: 'update',
			icon: <Icons.Edit />,
			onClick: (it) => {
				console.log('update', it);
			},
		},
		{ text: 'delete', size: 'large', color: 'red' },
	];

	return (
		<Container.$>
			<Dropdown
				open={values.first}
				onClose={() => onChange('first', false)}
				label={<DefaultDropdownLabel onClick={() => onChange('first', true)} />}
				items={items}
			/>

			<Dropdown
				open={values.second}
				onClose={() => onChange('second', false)}
				label={<Button onClick={() => onChange('second', true)}>Custom label</Button>}
				items={items}
			/>

			<Dropdown
				open={values.third}
				onClose={() => onChange('third', false)}
				label={<Button onClick={() => onChange('third', true)}>To left</Button>}
				items={items}
				left
			/>

			<Dropdown
				open={values.fourth}
				onClose={() => onChange('fourth', false)}
				label={<Button onClick={() => onChange('fourth', true)}>Icons</Button>}
				items={[
					{ text: 'Accept', icon: <Icons.Accept /> },
					{ text: 'Calendar', icon: <Icons.Calendar /> },
					{
						text: 'Edit',
						icon: <Icons.Edit />,
					},
					{ text: 'Delete', icon: <Icons.Delete />, color: 'red' },
				]}
			/>
		</Container.$>
	);
};
