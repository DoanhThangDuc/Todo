import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import InputSection from "../InputSection/InputSection";
import { TodoBoardProps } from "../Todo/TodoBoard";
import {
  StyledTodoList,
  TodoContainer,
  StyledList,
  HeadContent,
  StyleFilterPanel,
} from "./TodoList.styled";
import { TodoItemModel } from "../../App";

const TodoList: React.FC<TodoBoardProps> = ({
  todoItems = [],
  onSubmitTodoContent,
  setTodoItemStatus,
  setStrikeThrough,
  onClickFilter,
}) => {
  return (
    <StyledTodoList>
      <StyledList>
        <HeadContent>Check List</HeadContent>
        <TodoContainer>
          {todoItems.map((item: TodoItemModel) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                setTodoItemStatus={setTodoItemStatus}
                onContentClick={setStrikeThrough}
              />
            );
          })}
        </TodoContainer>
        <InputSection
          initialInput=""
          onSubmitTodoContent={onSubmitTodoContent}
        />
        <StyleFilterPanel>
          <h2>Show:</h2>
          <button onClick={() => onClickFilter("unchecked")}>All</button>
          <button onClick={() => onClickFilter("checked")}>Checked</button>
          <button onClick={() => onClickFilter("crossed")}>Crossed</button>
        </StyleFilterPanel>
      </StyledList>
    </StyledTodoList>
  );
};

export default TodoList;
