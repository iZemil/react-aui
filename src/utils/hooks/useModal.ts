import { cloneElement, useCallback, useContext, useId } from 'react';

import { OverlayContext } from '../../components/overlay';

export function useModal() {
	const id = useId();
	const context = useContext(OverlayContext);

	const show = useCallback(
		(component: React.ReactElement) => context.showModal(cloneElement(component, { ...component.props, id })),
		[context]
	);
	const hide = useCallback(() => context.hideModal(id), [context]);

	return { show, hide, id };
}
