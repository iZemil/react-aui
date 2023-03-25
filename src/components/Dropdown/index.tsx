import { Icon } from '..';
import * as React from 'react';

import { Button } from '../Button';
import { ButtonProps } from '../Button/types';

import S, { SDropdownContentProps } from './Styled';

export interface DropdownProps extends Partial<SDropdownContentProps> {
	label?: React.ReactNode;
	children: React.ReactNode;
	open?: boolean;
	onChange?: (option: OptionProps) => void;
	onClose?: () => void;
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
		<Icon.Dots />
	</Button>
);

export const Dropdown = (props: DropdownProps) => {
	const {
		label = <DropdownLabel />,
		disabled,
		open: propOpen,
		onClose,
		left = false,
		children,
		onChange,
		...rest
	} = props;
	const [stateOpen, setStateOpen] = React.useState(false);

	const handleOpen = () => {
		setStateOpen(true);
	};
	const handleClose = () => {
		if (onClose) {
			onClose();
		}

		setStateOpen(false);
	};
	const handleBlur = (e: React.FocusEvent) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			handleClose();
		}
	};

	const open = React.useMemo(() => propOpen ?? stateOpen, [propOpen, stateOpen]);

	return (
		<S.Wrapper.$ onBlur={handleBlur}>
			<S.Label.$
				disabled={Boolean(disabled)}
				open={open}
				onClick={() => {
					if (!disabled) {
						if (open) {
							handleClose();
						} else {
							handleOpen();
						}
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
							{...optionRestProps}
							onClick={(optionProps, e) => {
								if (onClick) {
									onClick(optionProps, e);
								}

								if (onChange) {
									onChange(optionProps);
								}

								handleClose();
							}}
						>
							{children}
						</Option>
					);
				})}
			</S.Content.$>
		</S.Wrapper.$>
	);
};

Dropdown.Label = DropdownLabel;
