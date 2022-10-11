import { useEffect, useState } from 'react';

import { getTime } from '../common';

const step = 100;

export function useTimer(ms: number, onFinish?: () => void) {
	const [isRunning, setRunning] = useState(false);
	const [value, changeValue] = useState(ms);

	const setTimer = (val = ms) => {
		changeValue(val);
	};

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
				const newValue = prev - step;

				if (newValue <= 0) {
					if (onFinish) {
						onFinish();
					}
				}

				return newValue;
			});
		}, step);

		return () => clearInterval(interval);
	}, [isRunning]);

	return { timer: getTime(value), setTimer, start, pause, isRunning };
}
