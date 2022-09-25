import { DefaultSelectLabel, Option, Select } from '.';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';
import { Icons } from '../icons';

export default {
	component: Select,
};

const defaultBasicState = {
	first: false,
	second: false,
	third: false,
	fourth: false,
	fifth: false,
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
			<Select
				open={values.first}
				onClose={() => onChange('first', false)}
				label={<DefaultSelectLabel onClick={() => onChange('first', true)} />}
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
			</Select>

			<Select
				open={values.second}
				onClose={() => onChange('second', false)}
				label={
					<Button color="blue" onClick={() => onChange('second', true)}>
						Custom label
					</Button>
				}
			>
				<Option
					onClick={(option) => {
						console.log('option props', option);
					}}
				>
					create
				</Option>
				<Option color="blue">read</Option>
				<Option color="main">update</Option>
				<Option color="red">delete</Option>
			</Select>

			<Select
				open={values.third}
				onClose={() => onChange('third', false)}
				label={<Button onClick={() => onChange('third', true)}>To left</Button>}
				left
			>
				<Option>1111111111111111</Option>
				<Option>2222222222222222</Option>
				<Option>3333333333333333</Option>
			</Select>
		</Container.$>
	);
};
