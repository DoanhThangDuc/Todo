import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
} from "./TodoList.styled";

function TodoList() {
  const [todoInput, setTodoInput] = useState("");
  const [list, setList] = useState([]);
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {/* checkStatus: checked, unchecked, crossed. */}
          {/* background, content*/}
          {list.map((item) => {
            return <TodoItem key={item.toString()} content={item}></TodoItem>;
          })}
        </TodoContainer>
        <InputSection
          onSetTodoInput={setTodoInput}
          onSetList={setList}
          todoInput={todoInput}
          list={list}
        ></InputSection>
      </StyledList>
    </StyledTodoList>
  );
}
export default TodoList;
