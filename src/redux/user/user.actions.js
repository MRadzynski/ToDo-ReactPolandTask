import { UserActionTypes } from './user.types';

export const setDisplayName = (displayName) => ({
  type: UserActionTypes.SET_DISPLAY_NAME,
  payload: displayName,
});

export const setTheme = (decision) => ({
  type: UserActionTypes.SET_THEME,
  payload: decision,
});

export const setHideCompletedTodos = (decision) => ({
  type: UserActionTypes.SET_HIDE_COMPLETED_TODOS,
  payload: decision,
});
