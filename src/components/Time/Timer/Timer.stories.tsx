import { Timer } from '.';
import * as React from 'react';

import { useTimer } from '../../../utils';
import { Button } from '../../Button';
import Container from '../../Container';

export default {
	component: Timer,
};

export const Basic = () => {
	const { timer, start, pause, isRunning, setTimer } = useTimer(1000 * 10, () => {
		pause();
		setTimer();
	});

	return (
		<Container.$ column>
			<Timer />

			<Container.$>
				{timer.minutes}:{timer.seconds}
				{isRunning ? (
					<>
						<Button
							onClick={() => {
								pause();
							}}
						>
							Pause
						</Button>
						<Button
							onClick={() => {
								setTimer(timer.value + 1000 * 15);
							}}
						>
							+15
						</Button>
					</>
				) : (
					<>
						<Button
							onClick={() => {
								start();
							}}
						>
							Start
						</Button>
					</>
				)}
			</Container.$>
		</Container.$>
	);
};
