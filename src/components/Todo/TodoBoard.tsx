import React from "react";
import TodoList from "../TodoList/TodoList";
import Logo from "../Logo/Logo";
import { StyledTodo } from "./TodoBoard.styled";
import { TodoItemModel, Status } from "../../App";

export interface TodoBoardProps {
  todoItems: TodoItemModel[];
  onSubmitTodoContent: (todoInput: string) => TodoItemModel;
  setTodoItemStatus: ({
    itemId,
    itemStatus,
  }: {
    itemId: string;
    itemStatus: Status;
  }) => void;
  setStrikeThrough: (id: string) => void;
  onClickFilter: (filter: Status) => void;
}

const TodoBoard: React.FC<TodoBoardProps> = ({
  todoItems,
  onSubmitTodoContent,
  setTodoItemStatus,
  setStrikeThrough,
  onClickFilter,
}) => {
  return (
    <StyledTodo>
      <Logo />
      <TodoList
        todoItems={todoItems}
        onSubmitTodoContent={onSubmitTodoContent}
        setTodoItemStatus={setTodoItemStatus}
        setStrikeThrough={setStrikeThrough}
        onClickFilter={onClickFilter}
      />
    </StyledTodo>
  );
};

export default TodoBoard;
