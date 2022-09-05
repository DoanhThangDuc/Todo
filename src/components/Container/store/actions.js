import { SET_TODO_INPUT, CREATE_TODO_INPUT, OPEN_TODO_INPUT } from "./constants";

export const setTodoInput = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};
export const createTodos = (payload) => {
  return {
    type: CREATE_TODO_INPUT,
    payload,
  };
};
export const openTodoInput = (payload) => {
  return {
    type: OPEN_TODO_INPUT,
    payload,
  };
};
