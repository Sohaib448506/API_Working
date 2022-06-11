import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#DCB6D5',
      },
      secondary: {
        main: '#D2D6EF',
      },
      info: {
        main: '#AF929D',
      },
      error: {
        main: '#104547',
      },
      success: {
        main: '#adf7b6',
      },
      warning: {
        main: '#a09be7',
      },
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          
          color: '#104547',
        },
      },
    },
    components: {
      MuiAppBar:{
          styleOverrides:{
              colorPrimary:{
                  backgroundImage:"url(https://allieweigh.files.wordpress.com/2019/09/istock-482582027.jpg)"
              }
          }
      }
    },
  };

  const theme=createTheme(themeOptions);
  export default theme