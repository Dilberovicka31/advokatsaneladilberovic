// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#12081e', // Darker purple
        paper: '#1a0d2b',   // Slightly lighter for cards/drawers
      },
      primary: {
        main: '#d4af37',    // Soft gold
      },
      text: {
        primary: '#f5f5f5',
        secondary: '#c1a15a',
      },
    },
    typography: {
      fontFamily: "Inter, serif",
    },
  });
  
export default theme;
