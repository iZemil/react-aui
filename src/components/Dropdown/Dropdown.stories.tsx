import { Dropdown, Option } from '.';
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
};

export const Basic = () => {
	const [values, setValues] = React.useState(defaultBasicState);

	const onChange = (key: keyof typeof defaultBasicState, value: boolean) => {
		setValues({
			...values,
			[key]: value,
		});
	};

	return (
		<Container.$>
			<Dropdown
				open={values.first}
				onClose={() => onChange('first', false)}
				label={<Dropdown.Label onClick={() => onChange('first', true)} />}
			>
				<Option
					onClick={(option) => {
						console.log('option props', option);
					}}
				>
					<Icons.Accept />
					create
				</Option>
				<Option>
					<Icons.Info />
					read
				</Option>
				<Option>
					<Icons.Edit />
					update
				</Option>
				<Option>
					<Icons.Delete />
					delete
				</Option>
			</Dropdown>

			<Dropdown
				open={values.second}
				onClose={() => onChange('second', false)}
				label={
					<Button size="small" color="blue" onClick={() => onChange('second', true)}>
						Custom label
					</Button>
				}
			>
				<Option
					size="small"
					onClick={(option) => {
						console.log('option props', option);
					}}
				>
					create
				</Option>
				<Option size="small" color="blue">
					read
				</Option>
				<Option size="small" color="main">
					update
				</Option>
				<Option size="small" color="red">
					delete
				</Option>
			</Dropdown>

			<Dropdown
				open={values.third}
				onClose={() => onChange('third', false)}
				label={<Button onClick={() => onChange('third', true)}>To left</Button>}
				left
			>
				<Option>1111111111111111</Option>
				<Option>2222222222222222</Option>
				<Option>3333333333333333</Option>
			</Dropdown>
		</Container.$>
	);
};
