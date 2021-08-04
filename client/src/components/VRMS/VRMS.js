import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core'
import "aos/dist/aos.css";
import DoneIcon from '@material-ui/icons/Done';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles';
import vrmsImage from '../../images/vrms.png';
import ContainedButton from '../shared/Buttons/Contained/ContainedButton';
import OutlinedButton from '../shared/Buttons/Outlined/OutlinedButton';

const features = ['Android', 'IOS', 'Website', 'Admin Panel']

const VRMS = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container alignItems="center"  style={{ overflowX: 'hidden' }}>
                    <Grid item xs={12}>
                        <Container data-aos="fade-right">
                            <Typography variant="h3" className={classes.title}>Our Restaurants Solution</Typography>
                            <Typography variant="body1" className={classes.subTitle}>We leverage the best restaurant management solution to grow your venture, scale your impact, and propel your mission forward</Typography>
                        </Container>
                    </Grid>
                    <Grid item md={7} data-aos="fade-right">
                        <img src={vrmsImage} alt="VRMS" style={{ maxWidth: '100%', padding: '20px 0px' }}/>
                    </Grid>
                    <Grid item md={4} data-aos="fade-left">
                        <Typography variant="h5">VRMS</Typography>
                        <Typography variant="body1" className={classes.desc}>Syberry provides turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions! Syberry provides turn-key software development services that add value to your business. Contact us today and transform your ideas into solutions!</Typography>
                        <Grid container className={classes.featuresContainer} spacing={3}>
                            {features.map((feature, index) => (
                                <Grid item style={{ display: 'flex' }} xs={6} key={index}>
                                    <DoneIcon className={classes.tickIcon}/>
                                    <Typography variant="body1">&nbsp;{feature}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Link style={{ textDecoration: 'none' }} href="http://chickenonfire.ddns.net/" target="_blank">
                                <ContainedButton endIcon={<ArrowForwardIcon/>} style={{ padding: '10px 20px'}}>View Demo</ContainedButton>
                                </Link>
                            </Grid>
                            <Grid item>
                                <OutlinedButton endIcon={<ArrowForwardIcon/>} style={{ padding: '10px 20px'}}>Learn More</OutlinedButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default VRMS;