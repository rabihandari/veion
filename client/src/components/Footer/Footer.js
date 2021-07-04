import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core'

import useStyles from './styles';
import SocialMedia from '../shared/SocialMedia/SocialMedia';

const Footer = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container alignItems="center" justify='space-between'>
                    <Grid item>
                        <Typography className={classes.copyright}>Copyright @ 2021</Typography>
                    </Grid>
                    <Grid item>
                        <SocialMedia />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;