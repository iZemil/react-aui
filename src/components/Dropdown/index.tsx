import * as React from 'react';

import { Button } from '../Button';
import { ButtonProps } from '../Button/types';
import { Overlay } from '../Overlay';
import { Icons } from '../icons';

import S, { SDropdownContentProps } from './Styled';

export interface DropdownProps extends Partial<SDropdownContentProps> {
	label?: React.ReactNode;
	children: React.ReactNode[];
	open: boolean;
	onChange?: (option: OptionProps) => void;
	onClose: () => void;
}

export interface OptionProps extends Partial<Omit<ButtonProps, 'onClick' | 'icon'>> {
	onClick?: (optionProps: OptionProps, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export class Option extends React.Component<OptionProps> {
	render() {
		const { children, onClick, ...rest } = this.props;

		return (
			<S.Option.$
				{...rest}
				onClick={(e) => {
					if (onClick) {
						onClick(this.props, e);
					}
				}}
			>
				{children}
			</S.Option.$>
		);
	}
}

const DropdownLabel = ({ ...rest }: Partial<ButtonProps>) => (
	<Button type="text" color="text" circle {...rest}>
		<Icons.ThreeDots />
	</Button>
);

export const Dropdown = (props: DropdownProps) => {
	const { label = <DropdownLabel />, open = false, onClose, left = false, children, onChange, ...rest } = props;

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

				<S.Content.$ open={open} left={left} {...rest}>
					{React.Children.map(children, (child, index) => {
						const option = child as unknown as Option;
						const { onClick, children, ...optionRestProps } = option.props;

						return (
							<Option
								key={index}
								type="text"
								color="text"
								onClick={(optionProps, e) => {
									if (onClick) {
										onClick(optionProps, e);
									}

									if (onChange) {
										onChange(optionProps);
									}

									onClose();
								}}
								{...optionRestProps}
							>
								{children}
							</Option>
						);
					})}
				</S.Content.$>
			</S.Wrapper.$>

			<Overlay open={open} onClose={onClose} />
		</>
	);
};

Dropdown.Label = DropdownLabel;
