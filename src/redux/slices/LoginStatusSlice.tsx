import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// createdAt
// : 
// "2025-01-29T14:53:15.972Z"
// email
// : 
// "jayksingh25@gmail.com"
// name
// : 
// "Jay Singh"
// profilePicture
// : 
// "https://lh3.googleusercontent.com/a/ACg8ocJKSc1uvSz7mIjsrksh6q4mhO8cA6KpBOByvIwAuqEJ0gFiBQ=s96-c"
interface LoginStatusState {
  isLoggedIn: boolean;
  uid: string;
  createdAt: string;
  email: string;
  name: string;
  profilePicture: string;

  
}

const initialState: LoginStatusState = {
  isLoggedIn: false, // Default state - user is not logged in
  uid: "",
  createdAt: "",
  email: "",
  name: "",
  profilePicture: "string"

};

const LoginStatusSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = LoginStatusSlice.actions;

export default LoginStatusSlice.reducer;
