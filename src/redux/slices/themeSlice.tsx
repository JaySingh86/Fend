import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the slice state
interface ThemeState {
  isDarkMode: boolean;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: false,
  } as ThemeState, // Type assertion to ensure initialState follows ThemeState
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    // If you plan to use a payload in the future, add it like below
    // setTheme: (state, action: PayloadAction<boolean>) => {
    //   state.isDarkMode = action.payload;
    // },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
