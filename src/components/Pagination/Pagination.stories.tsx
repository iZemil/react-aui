import { Pagination } from '.';
import * as React from 'react';

export default {
	component: Pagination,
};

export const Basic = () => {
	const [page, setPage] = React.useState(1);

	return <Pagination current={page} pages={10} onChange={setPage} />;
};
