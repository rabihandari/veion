import React from 'react'
import {  ThemeProvider } from '@material-ui/core'
import { theme } from './styles'

import Header from './components/Header/Header'

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
