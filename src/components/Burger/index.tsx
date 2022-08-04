import Styled from './Styled';

export interface IBurgerProps {
	onClick: () => void;
}

export const Burger = ({ onClick }: IBurgerProps) => {
	return (
		<Styled.$ onClick={onClick}>
			<Styled.Bar.$ />
		</Styled.$>
	);
};
