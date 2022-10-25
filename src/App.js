import GlobalStyles from "./shared/Global.styled";
import { ThemeProvider } from "styled-components";
import { todoStore } from "./store";
import TodoBoardContainer from "./containers/TodoBoardContainer";
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
      <TodoBoardContainer todoStore={todoStore} />
    </ThemeProvider>
  );
}

export default App;
