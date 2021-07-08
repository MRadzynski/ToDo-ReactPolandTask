import { UserActionTypes } from './user.types';

export const setDisplayName = (displayName) => ({
  type: UserActionTypes.SET_DISPLAY_NAME,
  payload: displayName,
});

export const setTheme = (theme) => ({
  type: UserActionTypes.SET_THEME,
  payload: theme,
});

export const setHideCompletedTodos = (decision) => ({
  type: UserActionTypes.SET_HIDE_COMPLETED_TODOS,
  payload: decision,
});
