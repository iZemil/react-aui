import { Icon } from '..';
import * as React from 'react';

import { TColors, TSize } from '../../styles';

import { S } from './Styled';

export interface PaginationProps {
	current: number | undefined;
	pages: number;
	onChange: (page: number) => void;
	color?: TColors;
	size?: TSize;
}

// TODO: refactor
export const Pagination = (props: PaginationProps) => {
	const { pages, current = 1, color, size, onChange } = props;
	const MAX_ELEMENTS = 7;
	const TWO = 2;

	const list = React.useMemo<number[]>(() => {
		if (pages <= MAX_ELEMENTS) {
			return Array.from({ length: pages <= 0 ? 1 : pages }).map((_, index) => {
				const page = index + 1;

				return page;
			});
		}

		const isStart = current < MAX_ELEMENTS - TWO;
		const isEnd = current > pages - 4;
		const arr = Array.from({ length: MAX_ELEMENTS }).map((_, index) => {
			// первые 2 всегда одинаковые
			if (index < TWO) {
				return index + 1;
			}

			// последние 2 зависят от количества страниц
			if (index >= MAX_ELEMENTS - TWO) {
				return pages - (MAX_ELEMENTS - index) + 1;
			}

			// остаются 3 посерединке с вариантами
			// 1. 1,2,3,4,5
			if (isStart) {
				return index + 1;
			}

			// 2. 96, 97, 98, 99, 100
			if (isEnd) {
				return pages - (5 - index + 1);
			}

			// 3. на основе текущего значения
			if (index === 2) {
				return current - 1;
			}

			if (index === 4) {
				return current + 1;
			}

			return current;
		});

		// dividers
		const medianIndex = Math.floor(MAX_ELEMENTS / 2);
		const currentIndex = arr.findIndex((value) => value === current);

		if (currentIndex < medianIndex) {
			arr[MAX_ELEMENTS - TWO] = 0;
		}

		if (currentIndex === medianIndex) {
			if (!isStart) {
				arr[1] = 0;
			}

			if (!isEnd) {
				arr[MAX_ELEMENTS - TWO] = 0;
			}
		}

		if (currentIndex > medianIndex) {
			arr[1] = 0;
		}

		return arr;
	}, [pages, current]);

	return (
		<S.$>
			<S.Item.$
				type="text"
				color={color}
				size={size}
				onClick={() => onChange(current - 1)}
				disabled={current <= 1}
			>
				<Icon.ChevronLeft />
			</S.Item.$>

			{list.map((page, index) => {
				const active = current === page;
				const isDivider = page === 0;

				if (isDivider) {
					return (
						<S.Item.$ type="text" color={color} size={size} key={index} disabled>
							...
						</S.Item.$>
					);
				}

				return (
					<S.Item.$
						key={index}
						active={active}
						type={active ? 'filled' : 'text'}
						color={color}
						size={size}
						onClick={() => onChange(page)}
					>
						{page}
					</S.Item.$>
				);
			})}

			<S.Item.$
				type="text"
				color={color}
				size={size}
				onClick={() => onChange(current + 1)}
				disabled={current >= pages}
			>
				<Icon.ChevronRight />
			</S.Item.$>
		</S.$>
	);
};
