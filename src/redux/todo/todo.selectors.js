import { createSelector } from 'reselect';

const selectTodo = (state) => state.todo;

export const selectTodos = createSelector([selectTodo], (todo) => todo?.todos);

export const selectTodoById = (id) =>
  createSelector([selectTodos], (todos) =>
    todos.find((todo) => todo.id === id)
  );
