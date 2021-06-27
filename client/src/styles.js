import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"DM Sans"',
        'sans-serif'
      ].join(','),
      allVariants: {
          color: '#FFF'
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
        main: '#45b1f5'
      }
    },
    overrides: {
      MuiContainer: {
        maxWidthLg: '1000px',
        
      },
    }
    
    
});

