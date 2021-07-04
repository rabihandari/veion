import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from './styles'
import { ScrollingProvider } from 'react-scroll-section';

import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import NavigationBar from './components/NavigationBar/NavigationBar'
import VRMS from './components/VRMS/VRMS'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import Footer from './components/Footer/Footer'

const App = () => {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <ScrollingProvider scrollBehavior="smooth" offset={-78}>
        <NavigationBar/>
        <Header />
        <HowItWorks/>
        <WhatWeDo />
        <VRMS />
        <Footer />
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
