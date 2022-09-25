import { Coords } from '.';
import * as React from 'react';

import { wait } from '../../utils';

export function useRipple(): [Coords | undefined, (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void] {
	const [coords, setCoords] = React.useState<Coords>();

	async function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const { top, left } = event.currentTarget.getBoundingClientRect();

		setCoords({ x: event.clientX - left, y: event.clientY - top });

		await wait(400);

		setCoords(undefined);
	}

	return [coords, handleClick];
}
