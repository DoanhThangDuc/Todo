import React from "react";
import { Action, Dispatch } from "redux";
import { connect } from "react-redux";
import TodoBoard from "../components/Todo/TodoBoard";
import {
  addTodoItem,
  setTodoItemStatus,
  setStrikeThrough,
} from "../features/todos/todosSlice";
import { filterTodoItems } from "../features/filters/filtersSlice";
import { selectTodoItemsByStatus } from "../selector";
import { State, Status } from "../App";

const mapStateToProps = (state: State) => ({ state: state });
function TodoBoardContainer({
  state,
  dispatch,
}: {
  state: State;
  dispatch: Dispatch<Action>;
}) {
  return (
    <TodoBoard
      todoItems={selectTodoItemsByStatus(state)}
      onSubmitTodoContent={(input: string) => dispatch(addTodoItem(input))}
      setTodoItemStatus={({
        itemId,
        itemStatus,
      }: {
        itemId: string;
        itemStatus: Status;
      }) => dispatch(setTodoItemStatus({ itemId, itemStatus }))}
      setStrikeThrough={(id) => dispatch(setStrikeThrough(id))}
      onClickFilter={(status: Status) => dispatch(filterTodoItems(status))}
    />
  );
}

export default connect(mapStateToProps)(TodoBoardContainer);
