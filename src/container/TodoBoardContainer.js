import React from "react";
import { connect } from "react-redux";

import TodoBoard from "../components/Todo/TodoBoard";
import {
  createTodoItem,
  updateTodoItemStatus,
  handleUpdateStrikeThrough,
} from "../features/todos/todosSlice";
import { filterTodoItems } from "../features/filters/filtersSlice";
import { selectTodoItemsByStatus } from "../selector";

const mapStateToProps = (state) => ({
  state: state,
});

function TodoBoardContainer({ state, dispatch }) {
  const visibleTodoItems = selectTodoItemsByStatus(state);

  return (
    <TodoBoard
      todoItems={state.todoItems}
      createTodoItem={(input) => dispatch(createTodoItem(input))}
      updateTodoItemStatus={({ itemId, itemStatus }) =>
        dispatch(updateTodoItemStatus({ itemId, itemStatus }))
      }
      handleUpdateStrikeThrough={(id) =>
        dispatch(handleUpdateStrikeThrough(id))
      }
      filterStatus={state.filter}
      filterTodoItems={(filterStatus) =>
        dispatch(filterTodoItems(filterStatus))
      }
      visibleTodoItems={visibleTodoItems}
    />
  );
}

export default connect(mapStateToProps)(TodoBoardContainer);
