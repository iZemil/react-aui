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
};

export const Basic = () => {
	const [values, setValues] = React.useState(defaultBasicState);
	const [selected, setSelected] = React.useState<string>();

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

			<Select
				open={values.fourth}
				onClose={() => onChange('fourth', false)}
				label={
					<Button
						style={{ minWidth: 120, justifyContent: 'space-between' }}
						color="white"
						onClick={() => onChange('fourth', true)}
					>
						{selected ?? 'Select item'}
						<Icons.ChevronDown />
					</Button>
				}
				onChange={(option) => setSelected(option.children as string)}
				left
			>
				<Option>First</Option>
				<Option>Second</Option>
				<Option disabled>Third</Option>
				<Option>Fourth</Option>
			</Select>
		</Container.$>
	);
};
