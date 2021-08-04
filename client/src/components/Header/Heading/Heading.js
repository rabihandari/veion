import React, { useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useHistory } from 'react-router-dom';

import useStyles from './styles'
import OutlinedButton from '../../shared/Buttons/Outlined/OutlinedButton'
import ContainedButton from '../../shared/Buttons/Contained/ContainedButton'


const Heading = ({ featuresRef }) => {
    const classes = useStyles()
    const history = useHistory();

    const scrollToFeatures = () => {
        featuresRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])

    
  const goToQuote = () => {
    history.push('/get-quote')
  }
  
    return (
        <Grid container spacing={5}>
            <Grid item md={12} data-aos="fade-up" data-aos-duration={400}>
                <Typography variant="body1" color="primary" className={classes.secure}>SECURE / FAST / RELIABLE</Typography>
            </Grid>
            <Grid item md={6} data-aos="fade-up" data-aos-duration={800}>
                <Typography variant="h2" className={classes.title}>Products Engineered For Success</Typography>
            </Grid>
            <Grid item md={12} data-aos="fade-up" data-aos-duration={1200}>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                        <ContainedButton endIcon={<ArrowForwardIcon/>} onClick={goToQuote}>Get A Quote</ContainedButton>
                    </Grid>
                    <Grid item>
                        <OutlinedButton endIcon={<ArrowForwardIcon/>} onClick={scrollToFeatures}>Learn More</OutlinedButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Heading;
