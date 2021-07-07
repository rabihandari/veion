import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Grid, Divider, IconButton, SwipeableDrawer, useMediaQuery, List, ListItem, ListItemText } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

import useStyles from './styles'
import OutlinedButton from '../shared/Buttons/Outlined/OutlinedButton';
import Logo from '../../images/logo-white.png';


const NavigationBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const matches = useMediaQuery(useTheme().breakpoints.down('xs'));


  const navigtionItems = [
    {
      title: 'Home',
      sectionId: 'home',
    },
    {
      title: 'Features',
      sectionId: 'features',
    },
    {
      title: 'Technologies',
      sectionId: 'technologies',
    },
    {
      title: 'How It Works',
      sectionId: 'how-it-works',
    },
  ]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (!e) return;
    setScrollPosition(window.pageYOffset);
  }

  const setDrawer = (open) => () => {
    setDrawerOpen(open);
  }

  const handleDrawerItemSelected = (item) => () => {
    setDrawerOpen(false);
  }

  const goToHome = () => {
    history.push('/')
  }

  return (
    <>
      <div className={classes.mainContainer} style={ scrollPosition > 150 ? { backgroundColor: 'rgb(255 255 255 / 12%)', backdropFilter: 'saturate(60%) blur(5px)' } : { backgroundColor: 'transparent' } }>
        <Container className={classes.container}>
          <Grid container alignItems='center' justify="space-between">
            <Grid item onClick={goToHome}>
              <Typography variant="h5" style={{ fontWeight: '700', cursor: 'pointer'}}>Veion</Typography>
            </Grid>
            {!matches ? 
              <Grid item>
                <Grid container alignItems='center'>
                  {navigtionItems.map(item => (
                    <NavigationLink key={item.title} action={() => {}}>{item.title}</NavigationLink>
                  ))}
                  <OutlinedButton className={classes.quoteButton}>Get A Quote</OutlinedButton>
                </Grid>
              </Grid>
            :
              <Grid item>
                <IconButton aria-label="delete" onClick={setDrawer(true)}>
                  <MenuIcon style={{ color: 'white', fontSize: '30px' }} />
                </IconButton>
              </Grid>
            }
          </Grid>
        </Container>
      </div>
      <React.Fragment>
        <SwipeableDrawer anchor='right' open={drawerOpen} onClose={setDrawer(false)} onOpen={setDrawer(true)} classes={{ paper: classes.drawerPaper }}>
          <div className={classes.listContainer}>
            <div className={classes.logoContainer}>
              <img src={Logo} alt="Logo" height="30"/>
            </div>
            <List>
              {navigtionItems.map((item, index) => (
                <ListItem button key={item.title} className={classes.listItem} onClick={handleDrawerItemSelected(item)}>
                  <ListItemText primary={item.title} style={{ textAlign: 'center' }} />
                </ListItem>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </>
  );
}

export default NavigationBar;

const NavigationLink = (props) => {
  const classes = useStyles();
  const linkRef = useRef();
  const [dividerWidth, setDividerWidth] = useState(0);

  const handleMouseEnter = () => {
    setDividerWidth(linkRef.current.clientWidth - 30)
  }
  const handleMouseLeave = () => {
    setDividerWidth(0)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={linkRef} onClick={props.action}>
      <Typography variant="body1" className={classes.navLink}>{props.children}</Typography>
      <Divider className={classes.navDivider} style={{ width: dividerWidth }}/>
    </div>
  );
}
