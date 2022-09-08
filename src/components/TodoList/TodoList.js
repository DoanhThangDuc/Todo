import { FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import TodoItem from "../TodoItem/TodoItem";
import {
  StyledTodoList,
  StyledList,
  HeadContent,
  InputBtn,
  InputSection,
  MonitorBtn,
} from "./TodoList.styled";

function TodoList() {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <ul>
          <TodoItem></TodoItem>
        </ul>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
