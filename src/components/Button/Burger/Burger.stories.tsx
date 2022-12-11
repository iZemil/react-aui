import { Burger } from '.';
import { Button } from '..';

export default {
	component: Burger,
};

export const Basic = () => (
	<Button.Burger
		onClick={() => {
			return;
		}}
	/>
);
