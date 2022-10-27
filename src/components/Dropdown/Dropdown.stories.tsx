import { Dropdown, Option } from '.';
import { Icon } from '..';
import * as React from 'react';

import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Dropdown,
};

export const Basic = () => {
	return (
		<Container>
			<Dropdown label={<Dropdown.Label />}>
				<Option
					onClick={(option) => {
						console.log('option props', option);
					}}
				>
					<Icon.base.Accept />
					create
				</Option>
				<Option>
					<Icon.base.Info />
					read
				</Option>
				<Option>
					<Icon.base.Edit />
					update
				</Option>
				<Option>
					<Icon.base.Delete />
					delete
				</Option>
			</Dropdown>

			<Dropdown
				label={
					<Button size="small" color="blue">
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

			<Dropdown label={<Button>To left</Button>} left>
				<Option>1111111111111111</Option>
				<Option>2222222222222222</Option>
				<Option>3333333333333333</Option>
			</Dropdown>
		</Container>
	);
};
