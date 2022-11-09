import { configureStore } from "@reduxjs/toolkit";

import todosReducer, { TodoActionTypes } from "./features/todos/todosSlice";
import filtersReducer, {
  
} from "./features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    todoItems: todosReducer,
    filter: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;
