import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './combineReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';


// Define the type for the store's state
export type RootState = ReturnType<typeof rootReducer>;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // AsyncStorage to save data persistently
};

const persistedReducer = persistReducer(persistConfig,rootReducer );
// Create the Redux store and add logger middleware
const store = configureStore({
  reducer:persistedReducer ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export store and types for use in the application
export const persistor = persistStore(store);
export default store;
