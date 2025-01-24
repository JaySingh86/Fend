import React, { createContext, useContext, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { lightTheme, darkTheme } from "./theme";

// Define the type for the context value (the theme object)
interface ThemeContextType {
  colors: {
    background: string;
    text: string;
    primary: string;
    card: string;
  };
}

// Create the context with a default value (lightTheme)
const ThemeContext = createContext<ThemeContextType>(lightTheme);

// Define the type for the ThemeProvider props
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component that provides the theme context
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
