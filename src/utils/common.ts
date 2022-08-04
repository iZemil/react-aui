export const copyBuffer = (value: string) => navigator.clipboard.writeText(value);

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

export const wait = (ms: number): Promise<void> => new Promise((res) => setTimeout(res, ms));
