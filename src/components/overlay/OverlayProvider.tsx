import * as React from 'react';

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
	children?: React.ReactNode;
}
// TODO?: ModalProvider, sepated provider
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

	const contextData: IOverlayContext = React.useMemo(
		() => ({
			...context,
			showModal,
			hideModal,
		}),
		[context, showModal]
	);

	return (
		<OverlayContext.Provider value={contextData}>
			{children}

			{React.Children.map(context.modals, (modal, key) => React.cloneElement(modal, { key, ...modal.props }))}
		</OverlayContext.Provider>
	);
};
