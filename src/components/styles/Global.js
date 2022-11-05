import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: 'Courier New', Courier, monospace;
  }

  body {
    background: ${({ theme }) => theme.bg};
  }
`;
