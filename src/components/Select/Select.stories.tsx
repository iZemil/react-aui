import { Select } from '.';
import * as React from 'react';

import Container from '../Container';
import { Option } from '../Dropdown';

export default {
	component: Select,
};

export const Basic = () => {
	const [selected, setDropdowned] = React.useState<string>();

	return (
		<Container.$>
			<Select
				label={<Select.Label placeholder="Select item">{selected}</Select.Label>}
				onChange={(option) => setDropdowned(option.children as string)}
			>
				<Option onClick={(props) => console.log('first', props)}>First</Option>
				<Option>Second</Option>
				<Option disabled>Third</Option>
				<Option>Fourth</Option>
			</Select>

			<Select disabled label={<Select.Label placeholder="Disabled">{selected}</Select.Label>}>
				<Option>1</Option>
				<Option disabled>2</Option>
				<Option>3</Option>
			</Select>
		</Container.$>
	);
};
