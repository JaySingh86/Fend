import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginStatusState {
  isLoggedIn: boolean;
}

const initialState: LoginStatusState = {
  isLoggedIn: false, // Default state - user is not logged in
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
