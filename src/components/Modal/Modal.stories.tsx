import { Modal } from '.';
import * as React from 'react';
import styled from 'styled-components';

import { TSize, border, color } from '../../styles';
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

export const Basic = () => {
	const [isOpen, setOpen] = React.useState(false);
	const basicModal = useModal();
	const longContentModal = useModal();

	return (
		<Container.$>
			<Button onClick={() => setOpen(!isOpen)}>Basic component</Button>
			<Modal open={isOpen} onClose={() => setOpen(!isOpen)}>
				<DefaultModalContent />
			</Modal>

			<Button
				onClick={() =>
					basicModal.show(
						<Modal open title={<Modal.Title>Title</Modal.Title>} onClose={basicModal.hide}>
							<DefaultModalContent />
						</Modal>
					)
				}
			>
				React Modal Hook
			</Button>

			<Button
				onClick={() =>
					longContentModal.show(
						<Modal
							open
							onClose={longContentModal.hide}
							closeButton
							title={<Modal.Title>Long content</Modal.Title>}
							content={
								<Modal.Content>
									<div>
										{Array.from({ length: 20 }).map((_, index) => (
											<DefaultModalContent key={index} />
										))}
									</div>
								</Modal.Content>
							}
							toolbar={
								<Modal.Toolbar>
									<Button onClick={longContentModal.hide}>Close</Button>
									<Button onClick={longContentModal.hide}>Ok</Button>
								</Modal.Toolbar>
							}
						/>
					)
				}
			>
				Long content
			</Button>
		</Container.$>
	);
};

export const Size = () => {
	const sizedModal = useModal();

	const handleClick = (size: TSize) => {
		sizedModal.show(
			<Modal open onClose={sizedModal.hide} size={size}>
				{Array.from({ length: 20 }).map((_, index) => (
					<DefaultModalContent key={index} />
				))}
			</Modal>
		);
	};

	return (
		<Container.$>
			<Button onClick={() => handleClick('small')} size="small">
				small
			</Button>

			<Button onClick={() => handleClick('medium')} size="medium">
				medium
			</Button>

			<Button onClick={() => handleClick('large')} size="large">
				large
			</Button>
		</Container.$>
	);
};

export const Custom = () => {
	const customModal = useModal();
	const CustomStyledModal = styled(Modal)`
		width: 200px;
		height: 100%;
		border: ${border('blue')};
	`;
	const CustomTitle = styled(Modal.Title)`
		color: ${color('blue')};
	`;

	return (
		<Container.$>
			<Button
				onClick={() =>
					customModal.show(
						<CustomStyledModal
							open
							onClose={customModal.hide}
							title={<CustomTitle color="blue">Title</CustomTitle>}
						>
							<DefaultModalContent />
						</CustomStyledModal>
					)
				}
			>
				Custom modal
			</Button>
		</Container.$>
	);
};
