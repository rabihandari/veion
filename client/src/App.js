import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from './styles'
import { ScrollingProvider } from 'react-scroll-section';

import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import NavigationBar from './components/NavigationBar/NavigationBar'

const App = () => {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <ScrollingProvider scrollBehavior="smooth" offset={-90}>
        <NavigationBar/>
        <Header />
        <HowItWorks/>
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
