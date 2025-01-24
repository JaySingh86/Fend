import { combineReducers } from 'redux';
import themeReducer from './slices/themeSlice';

// Define the type for the state of the theme slice
export interface RootState {
  theme: ReturnType<typeof themeReducer>;
}

// Combine all reducers to create a root reducer
const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
