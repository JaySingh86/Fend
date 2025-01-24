import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './combineReducer';

// Define the type for the store's state
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store and add logger middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export store and types for use in the application
export default store;
