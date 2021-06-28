import React from 'react'
import { Container } from '@material-ui/core'

import useStyles from './styles'
import NavigationBar from '../NavigationBar/NavigationBar'
import Heading from './Heading/Heading'
import Features from './Features/Features'
import Technologies from './Technologies/Technologies'

const Header = () => {
    const classes = useStyles()
  
    return (
        <div className={classes.mainContainer}>
            <NavigationBar />
            <div className={classes.overlay}></div>
            <div className={classes.headingContainer}>
                <Container>
                    <Heading />
                </Container>
            </div>
            <div className={classes.featuresContainer}>
                <Container>
                    <Features/>
                </Container>
            </div>
            <div className={classes.technologiesContainer}>
                <Container>
                    <Technologies/>
                </Container>
            </div>
        </div>
    );
}

export default Header;
