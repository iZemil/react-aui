import { Pagination } from '.';
import * as React from 'react';

import Container from '../Container';

export default {
	component: Pagination,
};

export const Basic = () => {
	const [page, setPage] = React.useState(1);

	return (
		<Container column>
			<Pagination current={page} pages={10} onChange={setPage} />
			<Pagination current={page} pages={10} onChange={setPage} color="text" />
			<Pagination current={page} pages={10} onChange={setPage} color="orange" size="small" />
		</Container>
	);
};
