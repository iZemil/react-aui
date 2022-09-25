import { RippleMetaProps } from '.';
import * as React from 'react';

export function useRipple(): [RippleMetaProps | undefined, (event: React.MouseEvent) => void] {
	const [coords, setCoords] = React.useState<RippleMetaProps>();
	const [timeout, refreshTimeout] = React.useState<number>();

	const handleClick = React.useCallback(async (event: React.MouseEvent) => {
		const { top, left } = event.currentTarget.getBoundingClientRect();

		setCoords({ x: event.clientX - left, y: event.clientY - top, time: Date.now() });
	}, []);

	React.useEffect(() => {
		if (coords) {
			refreshTimeout(setTimeout(() => setCoords(undefined), 400) as unknown as number);
		}

		return () => {
			refreshTimeout(undefined);
			clearTimeout(timeout);
		};
	}, [coords]);

	return [coords, handleClick];
}
