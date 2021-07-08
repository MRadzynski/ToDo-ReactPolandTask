import { TodoActionTypes } from './todo.types';

import {
  editTodoHelper,
  deleteTodoHelper,
  toggleCompleteTodoHelper,
  addAndSortTodoHelper,
} from './todo.utils';

const INTITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: addAndSortTodoHelper(state.todos, action.payload),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: editTodoHelper(state.todos, action.payload),
      };
    case TodoActionTypes.DELETE_TODO:
      return { ...state, todos: deleteTodoHelper(state.todos, action.payload) };
    case TodoActionTypes.TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todos: toggleCompleteTodoHelper(state.todos, action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
