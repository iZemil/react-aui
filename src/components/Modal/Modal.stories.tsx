import { Modal } from '.';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '../../styles';
import { useModal } from '../../utils';
import { Button } from '../Button';
import Container from '../Container';

export default {
	component: Modal,
};

const DefaultModalContent = () => {
	return (
		<>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</>
	);
};

const defaultBasicState = {
	first: false,
	second: false,
	third: false,
} as const;

export const Basic = () => {
	const [state, setOpen] = React.useState(defaultBasicState);
	const modal1 = useModal();

	const handleOpen = (key: keyof typeof defaultBasicState, value = true) => {
		setOpen({ ...state, [key]: value });
	};

	return (
		<Container.$>
			<Button
				onClick={() =>
					modal1.show(
						<Modal open title={<Modal.Title>Title</Modal.Title>} onClose={modal1.hide}>
							<DefaultModalContent />
						</Modal>
					)
				}
			>
				React Modal Hook
			</Button>

			<Button type="text" onClick={() => handleOpen('first')}>
				Basic modal
			</Button>
			<Modal open={state.first} onClose={() => handleOpen('first', false)}>
				<DefaultModalContent />
			</Modal>

			<Button type="text" onClick={() => handleOpen('second')}>
				With close button
			</Button>
			<Modal closeButton open={state.second} onClose={() => handleOpen('second', false)}>
				<DefaultModalContent />
			</Modal>

			<Button type="text" onClick={() => handleOpen('third')}>
				Long content
			</Button>
			<Modal
				title={<Modal.Title>Long content</Modal.Title>}
				closeButton
				open={state.third}
				onClose={() => handleOpen('third', false)}
			>
				<div>
					{Array.from({ length: 20 }).map((_, index) => (
						<DefaultModalContent key={index} />
					))}
				</div>
				<Container.$>
					<Button onClick={() => handleOpen('third', false)}>Close</Button>
				</Container.$>
			</Modal>
		</Container.$>
	);
};

const defaultSizeState = {
	first: false,
	second: false,
	third: false,
} as const;

export const Size = () => {
	const [state, setOpen] = React.useState(defaultSizeState);

	const handleOpen = (key: keyof typeof defaultSizeState, value = true) => {
		setOpen({ ...state, [key]: value });
	};

	return (
		<Container.$>
			<Button onClick={() => handleOpen('first')} size="small">
				small modal
			</Button>
			<Modal open={state.first} onClose={() => handleOpen('first', false)} size="small">
				{Array.from({ length: 20 }).map((_, index) => (
					<DefaultModalContent key={index} />
				))}
			</Modal>

			<Button onClick={() => handleOpen('second')} size="medium">
				medium modal
			</Button>
			<Modal open={state.second} onClose={() => handleOpen('second', false)} size="medium">
				{Array.from({ length: 20 }).map((_, index) => (
					<DefaultModalContent key={index} />
				))}
			</Modal>

			<Button onClick={() => handleOpen('third')} size="large">
				large modal
			</Button>
			<Modal open={state.third} onClose={() => handleOpen('third', false)} size="large">
				{Array.from({ length: 20 }).map((_, index) => (
					<DefaultModalContent key={index} />
				))}
			</Modal>
		</Container.$>
	);
};

const defaultCustomState = {
	first: false,
	second: false,
} as const;

const CustomStyledModal = styled(Modal)`
	width: 200px;
	height: 100%;
	border: ${border('blue')};
`;

export const Custom = () => {
	const [state, setOpen] = React.useState(defaultCustomState);

	const handleOpen = (key: keyof typeof defaultCustomState, value = true) => {
		setOpen({ ...state, [key]: value });
	};

	return (
		<Container.$ column>
			<Button type="text" onClick={() => handleOpen('first')}>
				Custom modal
			</Button>
			<Modal open={state.first} onClose={() => handleOpen('first', false)} size="medium">
				<DefaultModalContent />

				<Container.$>
					<Button type="text" block onClick={() => handleOpen('first', false)}>
						Cancel
					</Button>
					<Button block onClick={() => handleOpen('first', false)}>
						Ok
					</Button>
				</Container.$>
			</Modal>

			<Button type="text" onClick={() => handleOpen('second')}>
				Custom styled modal
			</Button>
			<CustomStyledModal open={state.second} onClose={() => handleOpen('second', false)}>
				<DefaultModalContent />
			</CustomStyledModal>
		</Container.$>
	);
};
