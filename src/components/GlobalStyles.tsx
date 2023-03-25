import { createGlobalStyle, css } from 'styled-components';
import { normalize as normalizeCss } from 'styled-normalize';

import { ITheme } from '../styles';

type Props = {
	normalize?: boolean;
	children?: (theme: ITheme) => string;
} & { theme: ITheme };

export const GlobalStyles = createGlobalStyle<Props>`
    ${(p) => {
		const { normalize = true } = p;

		if (normalize) {
			return css`
				${normalizeCss}

				html {
					box-sizing: border-box;
				}
				*,
				*:before,
				*:after {
					box-sizing: inherit;
				}
			`;
		}

		return '';
	}}

    ${(p) => (p.children ? p.children(p.theme) : '')}
`;
