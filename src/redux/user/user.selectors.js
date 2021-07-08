import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectDisplayName = createSelector(
  [selectUser],
  (user) => user?.displayName
);

export const selectTheme = createSelector([selectUser], (user) => user?.theme);

export const selectHideCompletedTodos = createSelector(
  [selectUser],
  (user) => user?.hideCompletedTodos
);
