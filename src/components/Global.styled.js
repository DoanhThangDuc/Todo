import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
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
  }
`;

export default GlobalStyles;
