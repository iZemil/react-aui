import { useEffect, useState } from 'react';

import { getTime } from '../common';

const step = 100;
export function useStopwatch() {
	const [isRunning, setRunning] = useState(false);
	const [value, changeValue] = useState(0);

	const start = () => {
		setRunning(true);
	};

	const pause = () => {
		setRunning(false);
	};

	useEffect(() => {
		if (!isRunning) {
			return;
		}

		const interval = setInterval(() => {
			changeValue((prev) => {
				const newValue = prev + step;

				return newValue;
			});
		}, step);

		return () => clearInterval(interval);
	}, [isRunning]);

	return { stopwatch: getTime(value), start, pause, isRunning };
}
