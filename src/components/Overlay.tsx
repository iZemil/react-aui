import * as React from 'react';
import styled from 'styled-components';

import { color } from '../styles';

import { Modal } from './Modal';

export interface OverlayProps {
	open: boolean;
	onClose?: () => void;
	children?: React.ReactElement;
}

const S = {
	$: styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${color('black')}60;
		z-index: 1;
	`,
};

export const Overlay = ({ open, children, onClose }: OverlayProps) => {
	return open ? (
		<S.$
			onClick={(e) => {
				const isWrapper = e.target === e.currentTarget;
				if (isWrapper && onClose) {
					onClose();
				}
			}}
		>
			{children}
		</S.$>
	) : null;
};

export type TPushComponent = (component: React.ReactElement) => void;
export type THideComponent = (id: string) => void;
interface IOverlayContext {
	modals: React.ReactElement[];
	showModal: TPushComponent;
	hideModal: THideComponent;
}
const defaultOverlayContext: IOverlayContext = {
	modals: [],
	showModal: () => {
		return;
	},
	hideModal: () => {
		return;
	},
};
export const OverlayContext = React.createContext<IOverlayContext>(defaultOverlayContext);
interface OverlayProviderProps {
	children?: React.ReactElement;
}
export const OverlayProvider = ({ children }: OverlayProviderProps) => {
	const [context, setContext] = React.useState(defaultOverlayContext);

	const showModal = React.useCallback(
		(modalComponent: React.ReactElement) => {
			setContext({
				...context,
				modals: [...context.modals, modalComponent],
			});
		},
		[context, setContext]
	);
	const hideModal = React.useCallback(
		(modalId: string) => {
			setContext({
				...context,
				modals: context.modals.filter((modalComponent) => modalComponent.props.id !== modalId),
			});
		},
		[context, setContext]
	);

	const contextValue: IOverlayContext = React.useMemo(
		() => ({
			...context,
			showModal,
			hideModal,
		}),
		[context, showModal]
	);

	return (
		<OverlayContext.Provider value={contextValue}>
			{children}

			{context.modals.map((modal, index) => (
				<Modal open key={index}>
					Modal form: {modal}
				</Modal>
			))}

			{React.Children.map(context.modals, (modal, key) => {
				return React.cloneElement(modal, { key, ...modal.props });
			})}
		</OverlayContext.Provider>
	);
};
