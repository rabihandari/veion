import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from './styles'

import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'

const App = () => {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <HowItWorks />
    </ThemeProvider>
  );
}

export default App;
