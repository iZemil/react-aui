import { TPrimitives } from './types';

export const copyBuffer = async (value: TPrimitives) => navigator.clipboard.writeText(value as string);

export const wait = (ms: number): Promise<number> => new Promise((res) => setTimeout(res, ms));

/**
 *
 * @param string any string
 * @returns hex color
 */
export const stringToColor = (string: string): string => {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
};

export const getTime = (ms: number) => {
	const days = Math.floor(ms / (1000 * 60 * 60 * 24));
	const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((ms % (1000 * 60)) / 1000);

	return {
		seconds,
		minutes,
		hours,
		days,
		value: ms,
	};
};
