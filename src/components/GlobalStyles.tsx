import { color } from '..';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
        color-scheme: ${({ theme }) => {
			if (theme.mode === 'dark') {
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
        
        
        background-color: ${color('bg')};
        color: ${color('text')};
    }
`;
