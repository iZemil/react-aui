import { Stopwatch } from '.';

import { useStopwatch } from '../../../utils';
import { Button } from '../../Button';
import Container from '../../Container';

export default {
	component: Stopwatch,
};

export const Basic = () => {
	const { stopwatch, start, pause, isRunning } = useStopwatch();

	return (
		<Container column>
			<Stopwatch />

			<Container>
				{stopwatch.seconds}:{stopwatch.value / 100}
				{isRunning ? <Button onClick={pause}>Pause</Button> : <Button onClick={start}>Start</Button>}
			</Container>
		</Container>
	);
};
