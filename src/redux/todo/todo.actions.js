import { TodoActionTypes } from './todo.types';

export const addTodo = (todo) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo,
});

export const editTodo = (todo) => ({
  type: TodoActionTypes.EDIT_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: id,
});

export const toggleCompleteTodo = (id) => ({
  type: TodoActionTypes.TOGGLE_COMPLETE_TODO,
  payload: id,
});
