import TodoItem from "../TodoItem/TodoItem";
import {
  StyledTodoList,
  StyledList,
  HeadContent,
} from "./TodoList.styled";

function TodoList() {
  
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <ul>
          <TodoItem check></TodoItem>
          <TodoItem check></TodoItem>
          <TodoItem background={'yellow'}></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem unCheck></TodoItem>
          <TodoItem background={'#6868eb'}></TodoItem>
          <TodoItem></TodoItem>
        </ul>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
