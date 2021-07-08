import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
