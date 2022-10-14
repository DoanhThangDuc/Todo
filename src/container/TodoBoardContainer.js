import React from "react";
import TodoBoard from "../components/Todo/TodoBoard";
import {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
  selectAllTodoItems,
} from "../features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { filterTodoItems } from "../features/filters/filtersSlice";

function TodoBoardContainer() {
  const todoItems = useSelector(selectAllTodoItems);
  const filterStatus = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <TodoBoard
      todoItems={todoItems}
      createTodoItem={(input) => dispatch(createTodoItem(input))}
      updateTodoItemStatus={({ itemId, itemStatus }) =>
        dispatch(updateTodoItemStatus({ itemId, itemStatus }))
      }
      handleUpdateStrikeThrough={(id) =>
        dispatch(handleUpdateStrikeThrough(id))
      }
      filterStatus={filterStatus}
      filterTodoItems={(filterStatus) =>
        dispatch(filterTodoItems(filterStatus))
      }
    />
  );
}

export default TodoBoardContainer;
