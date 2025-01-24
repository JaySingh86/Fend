// Define a type for the theme structure
interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    card: string;
  };
}

// Define the light and dark themes
export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#6200ee',
    card: '#f6f6f6',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
    card: '#1e1e1e',
  },
};
