import * as React from 'react';

import { IButtonProps } from '../Button/types';

import S from './Styled';

export interface ITabProps extends Partial<IButtonProps> {
	index: number;
	content?: React.ReactNode;
	active?: boolean;
}

export class Tab extends React.Component<ITabProps> {
	render() {
		const { children, active = false, ...rest } = this.props;

		return (
			<S.Tabs.Button.$ active={active} {...rest}>
				{children}
			</S.Tabs.Button.$>
		);
	}
}

export interface ITabsProps extends Partial<Pick<IButtonProps, 'size'>> {
	onChange: (tabIndex: number) => void;
	activeIndex?: number;
	title?: string;
	children: React.ReactNode[];
}

export const Tabs = ({ children, activeIndex, title, onChange, size, ...props }: ITabsProps) => {
	const currentContent = React.useMemo(() => {
		let content: ITabProps['content'] = undefined;

		React.Children.forEach(children, (child) => {
			const tab = child as unknown as Tab;
			const { index, content: tabContent } = tab.props;

			if (activeIndex === index) {
				content = tabContent;
			}
		});

		return content;
	}, [children, activeIndex]);

	return (
		<S.$>
			{title && <S.Title.$>{title}</S.Title.$>}

			<S.Head.$ {...props}>
				<S.Tabs.$>
					{React.Children.map(children, (child) => {
						const tab = child as unknown as Tab;
						const { index } = tab.props;

						return (
							<Tab
								key={index}
								active={activeIndex === index}
								onClick={() => {
									onChange(index);
								}}
								type="text"
								size={size}
								{...tab.props}
							/>
						);
					})}
				</S.Tabs.$>
			</S.Head.$>

			{currentContent && <S.Content.$>{currentContent}</S.Content.$>}
		</S.$>
	);
};
