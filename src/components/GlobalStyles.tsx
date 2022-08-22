import { color } from '..';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { EThemeMode } from '../styles';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
        color-scheme: ${({ theme }) => {
			if (theme.mode === EThemeMode.DARK) {
				return 'dark';
			}

			return 'auto';
		}};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Roboto', 'Arial', sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: 0.5s background;
        background: red;
        
        ${(props) => {
			const { theme } = props;

			if (theme.mode === EThemeMode.DARK) {
				return `
                    background-color: ${color('bg')(props)};
                    color: ${color('white')(props)};
                `;
			}

			return '';
		}}

    }
`;
