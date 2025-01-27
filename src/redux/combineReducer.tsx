import { combineReducers } from 'redux';
import themeReducer from './slices/themeSlice';
import  loginState from './slices/LoginStatusSlice';


// Define the type for the state of the theme slice
export interface RootState {
  theme: ReturnType<typeof themeReducer>;
}


// Combine all reducers to create a root reducer
const rootReducer = combineReducers({
  theme: themeReducer,
  loginStatus: loginState,
});

export default rootReducer;
