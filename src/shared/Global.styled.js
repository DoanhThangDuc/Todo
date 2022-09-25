import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    scroll-behavior: smooth;
    text-decoration: none;
  }
  body {
  background: url("/img/Background.png");
  background-size: 100vw 100vh ; 
  overflow-y: hidden;
  }
`;

export default GlobalStyle;
