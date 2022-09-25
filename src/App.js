import TodoBoard from "./components/Todo/TodoBoard";
import GlobalStyles from "./shared/Global.styled";
import { ThemeProvider } from "styled-components";
export const theme = {
  colors: {
    header: "#edfbff",
    body: "#141516",
    footer: "#003333",
  },
  mobile: "46.1875em",
  tablet: "63.9375em",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <TodoBoard></TodoBoard>;
    </ThemeProvider>
  );
}

export default App;
