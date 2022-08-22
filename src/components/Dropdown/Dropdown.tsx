import * as React from 'react';

import S, { IStProps } from './Styled';

interface IProps extends IStProps {
	label: React.ReactNode;
	children: React.ReactNode;
	opened: boolean;
	onClose: () => void;
}

export const Dropdown = ({ label, children, opened, position, onClose }: IProps) => {
	return (
		<S.$>
			<S.Label.$
				active={opened}
				onClick={() => {
					if (opened) {
						onClose();
					}
				}}
			>
				{label}
			</S.Label.$>

			{opened && (
				<>
					<S.Overlay.$
						onClick={(e) => {
							const isWrapper = e.target === e.currentTarget;
							if (isWrapper) {
								onClose();
							}
						}}
					/>
					<S.Children.$ position={position}>{children}</S.Children.$>
				</>
			)}
		</S.$>
	);
};
