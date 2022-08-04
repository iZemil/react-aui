import Styled from './Styled';

export interface ITab {
	id: string;
	content: React.ReactNode;
}

export interface ITabsProps {
	activeTab: ITab;
	tabs: ITab[];
	title?: string;
	children: React.ReactNode;
	onChange: (tab: ITab) => void;
}

export const Tabs = ({ children, tabs, activeTab, title, onChange, ...props }: ITabsProps) => {
	return (
		<Styled.$>
			{title && <Styled.Title.$>{title}</Styled.Title.$>}

			<Styled.Head.$ {...props}>
				<Styled.Tabs.$>
					{tabs.map((tab) => (
						<Styled.Tabs.Item.$ key={tab.id} active={tab.id === activeTab.id} onClick={() => onChange(tab)}>
							{tab.content}
						</Styled.Tabs.Item.$>
					))}
				</Styled.Tabs.$>
			</Styled.Head.$>

			<Styled.Content.$>{children}</Styled.Content.$>
		</Styled.$>
	);
};
