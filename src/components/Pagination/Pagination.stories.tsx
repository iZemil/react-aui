import { Pagination } from '.';

export default {
	component: Pagination,
};

export const Example = () => {
	return <Pagination current={1} pages={10} onChange={() => {}} />;
};
