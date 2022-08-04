import Styled, { IStProps } from './Styled';

export interface IDropdownProps extends IStProps {
	label: React.ReactNode;
	children: React.ReactNode;
	opened: boolean;
	onClose: () => void;
}

export const Dropdown = ({ label, children, opened, position, onClose }: IDropdownProps) => {
	return (
		<Styled.$>
			<Styled.Label.$
				active={opened}
				onClick={() => {
					if (opened) {
						onClose();
					}
				}}
			>
				{label}
			</Styled.Label.$>

			{opened && (
				<>
					<Styled.Overlay.$
						onClick={(e) => {
							const isWrapper = e.target === e.currentTarget;
							if (isWrapper) {
								onClose();
							}
						}}
					/>
					<Styled.Children.$ position={position}>{children}</Styled.Children.$>
				</>
			)}
		</Styled.$>
	);
};
