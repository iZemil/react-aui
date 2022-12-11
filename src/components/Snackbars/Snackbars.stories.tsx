import { useSnacks } from '../../utils';
import { Button } from '../Button';
import Container from '../Container';

export default {
	title: 'Snackbars',
};

export const Basic = () => {
	const snack = useSnacks();

	return (
		<Container column>
			<Container>
				More about snacks you can read in
				<Button type="text" blank to="https://react-hot-toast.com/">
					Official website
				</Button>
			</Container>

			<Container>
				<Button onClick={() => snack('Default')}>Default</Button>

				<Button type="filled" color="green" onClick={() => snack.success('Success')}>
					Success
				</Button>

				<Button type="filled" color="red" onClick={() => snack.error('Error')}>
					Error
				</Button>

				<Button
					type="filled"
					onClick={() =>
						snack('Icon', {
							icon: '👏',
						})
					}
				>
					Icon
				</Button>

				<Button
					type="filled"
					onClick={() =>
						snack((t) => (
							<span>
								Custom and <b>bold</b>
								<Button size="small" onClick={() => snack.dismiss(t.id)}>
									Dismiss
								</Button>
							</span>
						))
					}
				>
					JSX Content
				</Button>
			</Container>
		</Container>
	);
};

// TODO:
// export const Position = () => {
// 	const snack = useSnacks();

//     return <Container>

//     </Container>
// }
