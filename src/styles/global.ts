import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    transition: all 0.2s linear;
  }
`;
