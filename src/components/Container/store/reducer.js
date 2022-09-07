import { SET_TODO_INPUT, CREATE_TODO_INPUT, OPEN_TODO_INPUT } from "./constants";

const initialState = {
  todoInput: "",
  todos: [],
  isInputExpand: false,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case CREATE_TODO_INPUT:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case OPEN_TODO_INPUT:
      return {
        ...state,
        isInputExpand: action.payload,
      }
  }
}

export { initialState };
export default reducer;
