import { FaRegCommentAlt } from "react-icons/fa";

import {
  StyledTodoList,
  StyledList,
  HeadContent,
  ListContent,
} from "./TodoList.styled";
function TodoList() {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <ul>
          <ListContent>
            <FaRegCommentAlt />
            <p>Content 1</p>
          </ListContent>
          <ListContent>
            <FaRegCommentAlt />
            <p>Content 1</p>
          </ListContent>
        </ul>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
