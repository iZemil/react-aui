import { useSnacks } from '../../utils';
import Container from '../Container';

import { Button } from './index';

export default {
	component: Button,
};

const Ico = () => <span>i</span>;

export const Type = () => {
	return (
		<Container>
			<Button>Default</Button>
			<Button type="filled">Filled</Button>
			<Button type="text">Text</Button>
			<Button type="dashed">Dashed</Button>
		</Container>
	);
};

export const Size = () => {
	return (
		<Container column>
			<Container>
				<Button size="small">small</Button>
				<Button size="medium">medium</Button>
				<Button size="large">large</Button>
			</Container>

			<Container>
				<Button icon size="small">
					<Ico />
				</Button>
				<Button icon size="medium">
					<Ico />
				</Button>
				<Button icon size="large">
					<Ico />
				</Button>
			</Container>

			<Container>
				<Button icon size="small" circle>
					<Ico />
				</Button>
				<Button icon size="medium" circle>
					<Ico />
				</Button>
				<Button icon size="large" circle>
					<Ico />
				</Button>
			</Container>
		</Container>
	);
};

export const Color = () => {
	return (
		<Container column>
			<Container>
				<Button>Default</Button>
				<Button color="red">red</Button>
				<Button color="green">green</Button>
				<Button color="blue">blue</Button>
			</Container>

			<Container>
				<Button type="filled">Default</Button>
				<Button type="filled" color="red">
					red
				</Button>
				<Button type="filled" color="green">
					green
				</Button>
				<Button type="filled" color="blue">
					blue
				</Button>
			</Container>
		</Container>
	);
};

export const Icons = () => {
	return (
		<Container column>
			<Container>
				<Button>
					<Ico />
					Home
				</Button>
				<Button>
					<Ico />
				</Button>
				<Button circle>
					<Ico />
				</Button>
				<Button type="text" circle>
					<Ico />
				</Button>
			</Container>

			<Container>
				<Button type="filled">
					<Ico />
					Home
				</Button>
				<Button type="filled">
					<Ico />
				</Button>
				<Button type="filled" circle>
					<Ico />
				</Button>
			</Container>
		</Container>
	);
};

export const Other = () => {
	const snack = useSnacks();

	return (
		<Container column>
			<Container>
				<Button type="filled" block>
					Block
				</Button>
			</Container>

			<Container>
				<Button disabled>Disabled</Button>

				<Button circle disabled>
					<Ico />
				</Button>
			</Container>

			<Container>
				<Button type="filled" onClick={() => snack.success('Success')}>
					On Click
				</Button>
			</Container>

			<Container>
				<Button to="#link">Link</Button>

				<Button to="#link" type="text">
					Link
				</Button>

				<Button to="#link" type="text">
					Link
				</Button>

				<Button to="#link" type="text" size="small">
					Link
				</Button>

				<Button to="https://google.com" type="text" blank>
					Target Blank Link
				</Button>
			</Container>
		</Container>
	);
};
