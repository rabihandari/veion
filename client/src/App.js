import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from './styles'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ScrollToTop from './components/shared/ScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';

const App = () => {
  
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
          <ScrollToTop/>
          <NavigationBar/>
          <Switch>
              <Route exact path="/" render={(props) => <Home {...props}/> }/>
              <Route exact path="/what-we-do" render={(props) => <WhatWeDo {...props}/> }/>
          </Switch>
          <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
