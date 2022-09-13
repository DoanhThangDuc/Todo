import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
} from "./TodoList.styled";

function TodoList() {
  let content = "Lorem ipsum dolor sit amet";
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          <TodoItem checkStatus="checked" content={content}></TodoItem>
          <TodoItem checkStatus="checked" content={content}></TodoItem>
          <TodoItem background={"yellow"} content={content}></TodoItem>
        </TodoContainer>
        <InputSection></InputSection>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
