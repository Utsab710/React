import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //new todo
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
        todo.id === action.payload.id
          ? (todo.text = action.payload.input)
          : todo.text
      );

      state.isUpdatable = action.payload.isUpdatable;
    },
    setInitialStateData: (state, action) => {
      state.isUpdatable = action.payload.isUpdatable;
      state.id = action.payload.id;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setInitialStateData } =
  todoSlice.actions;
export default todoSlice.reducer;
