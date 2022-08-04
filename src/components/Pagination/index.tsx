import { useMemo } from 'react';

import { Icons } from '../icons';
import Styled from './Styled';

export interface IPaginationProps {
	current: number | undefined;
	pages: number;
	onChange: (page: number) => void;
}

// TODO: refactor
export const Pagination = ({ pages, current = 1, onChange }: IPaginationProps) => {
	const MAX_ELEMENTS = 7;
	const TWO = 2;

	const list = useMemo<number[]>(() => {
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
		<Styled.$>
			<Styled.Item.$ onClick={() => onChange(current - 1)} disabled={current <= 1}>
				<Icons.ChevronLeft />
			</Styled.Item.$>

			{list.map((page, index) => {
				const active = current === page;
				const isDivider = page === 0;

				if (isDivider) {
					return (
						<Styled.Item.$ key={index} disabled>
							...
						</Styled.Item.$>
					);
				}

				return (
					<Styled.Item.$ key={index} active={active} onClick={() => onChange(page)}>
						{page}
					</Styled.Item.$>
				);
			})}

			<Styled.Item.$ onClick={() => onChange(current + 1)} disabled={current >= pages}>
				<Icons.ChevronRight />
			</Styled.Item.$>
		</Styled.$>
	);
};
