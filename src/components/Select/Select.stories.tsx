import { Select } from '.';
import * as React from 'react';

import Container from '../Container';
import { Option } from '../Dropdown';

export default {
	component: Select,
};

const defaultBasicState = {
	first: false,
};

export const Basic = () => {
	const [values, setValues] = React.useState(defaultBasicState);
	const [selected, setDropdowned] = React.useState<string>();

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
				label={
					<Select.Label placeholder="Select item" onClick={() => onChange('first', true)}>
						{selected}
					</Select.Label>
				}
				onChange={(option) => setDropdowned(option.children as string)}
			>
				<Option>First</Option>
				<Option>Second</Option>
				<Option disabled>Third</Option>
				<Option>Fourth</Option>
			</Select>
		</Container.$>
	);
};
