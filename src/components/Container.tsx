import styled from 'styled-components';

const Container = {
	$: styled.div<{ column?: boolean }>`
		display: flex;
		gap: 20px;

		${(props) =>
			props.column
				? `
					flex-direction: column;
			`
				: `
					align-items: center;
			`}
	`,
};

export default Container;
