import React, { useState, useRef } from 'react'
import { Container, Typography, Grid, Divider } from '@material-ui/core'

import useStyles from './styles'
import OutlinedButton from '../shared/Buttons/Outlined/OutlinedButton'

const NavigationBar = () => {
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Grid container alignItems='center' justify="space-between">
          <Grid item>
            <Typography variant="h5">Veion</Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems='center'>
              <NavigationLink>Home</NavigationLink>
              <NavigationLink>Features</NavigationLink>
              <NavigationLink>Technologies</NavigationLink>
              <NavigationLink>Porfolio</NavigationLink>
              <OutlinedButton className={classes.quoteButton}>Get A Quote</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={linkRef}>
      <Typography variant="body1" className={classes.navLink}>{props.children}</Typography>
      <Divider className={classes.navDivider} style={{ width: dividerWidth }}/>
    </div>
  );
}
