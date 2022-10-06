import { Burger } from '.';
import { Button } from '..';
import * as React from 'react';

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
