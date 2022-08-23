import * as React from 'react';

import { Button } from '../Button';
import { IButtonProps } from '../Button/types';
import { Overlay } from '../Overlay';
import { Icons } from '../icons';

import S, { ISDropdownContentProps } from './Styled';

export interface IDropdownItem extends Partial<Omit<IButtonProps, 'onClick'>> {
	text: string;
	onClick?: (item: IDropdownItem) => void;
	icon?: React.ReactNode;
}

export interface IProps extends Partial<ISDropdownContentProps> {
	label?: React.ReactNode;
	items: Array<IDropdownItem>;
	open: boolean;
	onClose: () => void;
}

export const DefaultDropdownLabel = ({ ...rest }: Partial<IButtonProps>) => (
	<Button type="text" circle {...rest}>
		<Icons.ThreeDots />
	</Button>
);

// TODO: Dropdown AND Select are almost the same
// TODO: Portal implementation with Overlay
export const Dropdown = (props: IProps) => {
	const { label = <DefaultDropdownLabel />, items, open = false, onClose, left = false, ...rest } = props;

	return (
		<>
			<S.Wrapper.$>
				<S.Label.$
					open={open}
					onClick={() => {
						if (open) {
							onClose();
						}
					}}
				>
					{label}
				</S.Label.$>

				{open && (
					<S.Content.$ open={open} left={left} {...rest}>
						{items.map((item) => {
							const { text, onClick, icon, ...itemRest } = item;

							return (
								<Button
									key={text}
									type="text"
									color="text"
									onClick={() => {
										onClose();

										if (onClick) {
											onClick(item);
										}
									}}
									{...itemRest}
								>
									{icon ?? null}
									{text}
								</Button>
							);
						})}
					</S.Content.$>
				)}
			</S.Wrapper.$>

			<Overlay open={open} onClose={onClose} />
		</>
	);
};
