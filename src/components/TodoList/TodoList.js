import { FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import TodoItem from "../TodoItem/TodoItem";
import { StyledTodoList, StyledList, HeadContent } from "./TodoList.styled";

function TodoList() {
  let check = true;
  let unCheck = false;
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <ul>
          <TodoItem check background={""}></TodoItem>
          <TodoItem check background={""}></TodoItem>
          <TodoItem background={"yellow"}></TodoItem>
          <TodoItem background={""}></TodoItem>
          <TodoItem unCheck background={""}></TodoItem>
          <TodoItem check background={"#6868eb"}></TodoItem>
          <TodoItem background={""}></TodoItem>
        </ul>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
