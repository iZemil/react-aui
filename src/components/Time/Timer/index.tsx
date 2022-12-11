import { Editor } from '../../Editor';

export const Timer = () => {
	return (
		<Editor
			preview
			value={`use hook to create your own Timer\n\n\`const { timer, start, ...rest } = useTimer(msValue, onFinish);\``}
		/>
	);
};
