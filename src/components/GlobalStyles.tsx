import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { ITheme } from '../styles';

type Props = {
	normalize?: boolean;
	children?: (theme: ITheme) => string;
} & { theme: ITheme };

export const GlobalStyles = createGlobalStyle<Props>`
    ${(props) => (props.normalize ?? true ? normalize : '')}

    ${(props) => (props.children ? props.children(props.theme) : '')}
`;
