import { combineReducers } from 'redux';

import todoReducer from './todo/todo.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export default rootReducer;
