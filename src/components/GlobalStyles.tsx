import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { color as colorFn } from '../styles/utils';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
        color-scheme: ${({ theme }) => theme.mode};
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
        
        
        background-color: ${colorFn('bg')};
        color: ${colorFn('text')};
    }
`;
