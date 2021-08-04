import React, { useState } from 'react'
import { ThemeProvider, Snackbar } from '@material-ui/core'
import { darkTheme } from './styles'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

import AppContext from './Context/AppContext';
import ScrollToTop from './components/shared/ScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import GetAQuote from './pages/GetAQuote';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
  
  return (
    <Router>
      <AppContext.Provider value={{ setAlert }}>
        <ThemeProvider theme={darkTheme}>

            <ScrollToTop/>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props}/> }/>
                <Route exact path="/what-we-do" render={(props) => <OurServices {...props}/> }/>
                <Route exact path="/careers" render={(props) => <Careers {...props}/> }/>
                <Route exact path="/contact-us" render={(props) => <ContactUs {...props}/> }/>
                <Route exact path="/about-us" render={(props) => <AboutUs {...props}/> }/>
                <Route exact path="/get-quote" render={(props) => <GetAQuote {...props}/> }/>
            </Switch>
            <Snackbar open={alert.open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={5000} onClose={() => setAlert({ ...alert, open: false })}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
