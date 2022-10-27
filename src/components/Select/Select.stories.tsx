import { Select } from '.';
import * as React from 'react';

import Container from '../Container';
import { Option } from '../Dropdown';

export default {
	component: Select,
};

export const Basic = () => {
	const [value, setValue] = React.useState<string>();

	return (
		<Container>
			<Select
				label={<Select.Label placeholder="Select item">{value}</Select.Label>}
				onChange={(option) => setValue(option.children as string)}
			>
				<Option onClick={(props) => console.log('first', props)}>First</Option>
				<Option>Second</Option>
				<Option disabled>Third</Option>
				<Option>Fourth</Option>
			</Select>

			<Select disabled label={<Select.Label placeholder="Disabled">{value}</Select.Label>}>
				<Option>1</Option>
				<Option disabled>2</Option>
				<Option>3</Option>
			</Select>
		</Container>
	);
};
