import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    scroll-behavior: smooth;
    text-decoration: none;
  }
  body {
  overflow-y: hidden;
  }
`;

export default GlobalStyle;
