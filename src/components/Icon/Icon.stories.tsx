import { Svg } from '.';

import Container from '../Container';
import { Editor } from '../Editor';

export default {
	component: Svg,
};

export const Basic = () => {
	return (
		<Container column>
			<Editor
				preview
				value={`
    import { Svg, SvgProps, useColor } from 'react-ui';

    // to find icons: https://www.svgrepo.com/
    // also you can use useColor(props.color ?? 'text');
    const MyIcon = (props: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
            ></path>
        </Svg>
    );
            `}
			/>
		</Container>
	);
};
