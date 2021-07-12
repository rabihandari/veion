import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '"DM Sans"',
        'sans-serif'
      ].join(','),
      
      allVariants: {
          color: '#FFF',
      },
      body1: {
        color: '#FFFFFF96'
      },
      body2: {
        color: '#FFFFFF96'
      },
      
      
    },
    palette: {
      primary: {
        main: '#45b1f5',
        dark: '#0075bf',
      },
      secondary: {
        main: '#000',
        light: '#181818',
        dark: '#121212'
      },
    },
    
    overrides: {
      MuiContainer: {
        maxWidthLg: '1000px',
      },
      MuiInput: {
        root: {
          color: 'white',
        },
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(255 255 255 / 42%)'
          },
          '&:after': {
              borderBottom: `2px solid #45b1f5`
          },
          '&:hover:not($disabled):not($focused):not($error):before': {
              borderBottom: `2px solid white`
          }
        },
      },
      // MuiInputBase: {
      //   input: {
      //     '&:-webkit-autofill': {
      //       backgroundColor: 'transparent!important'
      //     },
      //   },
      // },
      MuiOutlinedInput: {
        root: {
          color: 'white',
          
        },
        notchedOutline: {
          borderColor: 'rgb(255 255 255 / 15%)'
        },
      },
      MuiTextField: {
        root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(255 255 255 / 15%)"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#45b1f5"
          }
        },
        
      }
      
    }
});

export const lightTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '"DM Sans"',
        'sans-serif'
      ].join(','),
      
      allVariants: {
          color: '#000',
      },
      body1: {
        color: '#00000096'
      },
      body2: {
        color: '#00000096'
      }
    },
    palette: {
      primary: {
        main: '#45b1f5',
        dark: '#0075bf',
      },
      
    },
    overrides: {
      MuiContainer: {
        maxWidthLg: '1000px',
        
      },
      MuiInputBase: {
        root: {
          fontSize: '14px'
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: '14px'
        }
      }
    }
});



