import styled from 'styled-components';

import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

const Styled = {
	$: styled(Dropdown)``,
	Label: {
		$: styled(Button)`
			min-width: 120px;
			justify-content: space-between;
		`,
	},
};

export default Styled;
