import * as React from 'react';

import { ButtonProps } from '../Button/types';

import S from './Styled';

export interface TabProps extends Partial<ButtonProps> {
	index: number;
	content?: React.ReactNode;
	active?: boolean;
}

export class Tab extends React.Component<TabProps> {
	render() {
		const { children, active = false, ...rest } = this.props;

		return (
			<S.Tabs.Button.$ active={active} {...rest}>
				{children}
			</S.Tabs.Button.$>
		);
	}
}

export interface TabsProps extends Partial<Pick<ButtonProps, 'size' | 'icon'>> {
	onChange: (tabIndex: number) => void;
	activeIndex?: number;
	title?: string;
	children: React.ReactNode[];
}

export const Tabs = (props: TabsProps) => {
	const { children, activeIndex, title, onChange, size, icon, ...rest } = props;

	const currentContent = React.useMemo(() => {
		let content: TabProps['content'] = undefined;

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

			<S.Head.$ {...rest}>
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
								icon={icon}
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
