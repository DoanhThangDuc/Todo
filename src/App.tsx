import GlobalStyles from "./shared/Global.styled";
import { ThemeProvider } from "styled-components";
import TodoBoardContainer from "./container/TodoBoardContainer";

export const theme = {
  colors: {
    header: "#edfbff",
    body: "#141516",
    footer: "#003333",
  },
  mobile: "46.1875em",
  tablet: "63.9375em",
};

export type Status = "unchecked" | "checked" | "crossed";

export interface TodoItemModel {
  content: string;
  status: Status;
  id: string;
  strikeThrough: boolean;
}

export interface State {
  todoItems: TodoItemModel[];
  filter: Status;
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TodoBoardContainer />
    </ThemeProvider>
  );
};

export default App;
