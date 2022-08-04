import styled from 'styled-components';

import { BORDER, ESize, PADDINGS, color, disabledCss } from '../../styles';
import { ITheme } from '../../styles/theme';

export interface IStButton {
	kind?: EButton;
	size?: ESize;
	icon?: boolean;
	$color?: keyof ITheme['colors'];
	disabled?: boolean;
}

const commonKindCss = (props: any) => `
	padding: ${PADDINGS.Medium};
	border-radius: ${BORDER.radius};
	border: 2px solid ${color('Main')(props)};
	transition: background-color 0.15s,color 0.15s;
`;

const Styled = {
	$: styled.button<IStButton>`
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${PADDINGS.Medium};
		color: ${color('Main')};
		font-size: 18px;
		outline: 0;
		cursor: pointer;

		${(props) => {
			const { kind } = props;
			let styles = `
				background: none;
				border: 0;
			`;

			if (!kind) {
				return styles;
			}

			if (kind === EButton.Primary) {
				styles = `
					background: ${color('Main')(props)};
					color: ${color('Black')(props)};
					width: 100%;
				`;
			}

			if (kind === EButton.Border) {
				styles = `
					width: 100%;
					background: transparent;
				`;
			}

			if (kind === EButton.Ghost) {
				styles = `
					border: 0;
					background: transparent;
				`;
			}

			return `${commonKindCss(props)}${styles}`;
		}}

		${({ icon }) =>
			icon &&
			`
			height: 40px;
			width: 40px;
			font-size: 20px;
		`}

		${(props) => {
			const { kind, $color } = props;

			if ($color) {
				const foundColor = color($color)(props);

				if (kind === EButton.Primary) {
					return `
						background: ${foundColor};
						border-color: ${foundColor};
					`;
				} else {
					return `
						color: ${foundColor};
						border-color: ${foundColor};
					`;
				}
			}

			return '';
		}}

		${({ size }) => {
			if (size === ESize.small) {
				return `
					font-size: 14px;
				`;
			}

			return '';
		}}

		${({ disabled }) => disabled && disabledCss(``)}
	`,
};

export enum EButton {
	Primary = 'PRIMARY',
	Border = 'BORDER',
	Ghost = 'GHOST',
}

export interface IButtonProps extends IStButton {
	type?: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export function Button({ children, onClick, type, ...rest }: IButtonProps) {
	return (
		<Styled.$ type={type ?? 'button'} onClick={onClick} {...rest}>
			{children}
		</Styled.$>
	);
}
