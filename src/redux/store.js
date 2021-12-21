import todosReducer from './todos/todos-reducer';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

// import logger from 'redux-logger';

// const middleware = ;  middleware: () => getDefaultMiddleware().concat(logger),

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
