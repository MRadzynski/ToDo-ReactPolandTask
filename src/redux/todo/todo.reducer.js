import { TodoActionTypes } from './todo.types';

import { addTodoHelper, editTodoHelper, deleteTodoHelper } from './todo.utils';

const INTITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: addTodoHelper(state.todos, action.payload),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: editTodoHelper(state.todos, action.payload),
      };
    case TodoActionTypes.DELETE_TODO:
      return { ...state, todos: deleteTodoHelper(state.todos, action.payload) };
    default:
      return state;
  }
};

export default todoReducer;
