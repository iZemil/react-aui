import { TPrimitives } from './types';

export const copyBuffer = async (value: TPrimitives) => navigator.clipboard.writeText(value as string);

/**
 * Get random number from range
 * @param from inclusive
 * @param to inclusive
 */
export function getRandom(from: number, to: number, isInt = true): number {
	if (isInt) {
		from = Math.ceil(from);
		to = Math.floor(to);

		return Math.floor(Math.random() * (to - from + 1)) + from;
	}

	return Math.random() * (from - to) + from;
}

export const wait = (ms: number): Promise<number> => new Promise((res) => setTimeout(res, ms));

export const getInitials = (name: string) => `${name[0]}`;

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
