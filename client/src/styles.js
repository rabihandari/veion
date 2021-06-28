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
      }
    },
    palette: {
      primary: {
        main: '#45b1f5',
        dark: '#0075bf'
      },
      
      
    },
    overrides: {
      MuiContainer: {
        maxWidthLg: '1000px',
        
      },
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
        dark: '#0075bf'
      },
      
    },
    overrides: {
      MuiContainer: {
        maxWidthLg: '1000px',
        
      },
    }
});



