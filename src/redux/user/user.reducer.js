import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  displayName: '',
  theme: 'light',
  hideCompletedTodos: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload,
      };
    case UserActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case UserActionTypes.SET_HIDE_COMPLETED_TODOS:
      return {
        ...state,
        hideCompletedTodos: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
