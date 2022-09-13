import TodoItem from "../TodoItem/TodoItem";
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
          <TodoItem content={content}></TodoItem>
          <TodoItem checkStatus="crossed" content={content}></TodoItem>
          <TodoItem background={"#6868eb"} content={content}></TodoItem>
          <TodoItem content={content}></TodoItem>
        </TodoContainer>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
