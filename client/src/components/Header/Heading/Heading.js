import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles'
import OutlinedButton from '../../shared/Buttons/Outlined/OutlinedButton'
import ContainedButton from '../../shared/Buttons/Contained/ContainedButton'


const Heading = () => {
    const classes = useStyles()
  
    return (
        <Grid container spacing={5}>
            <Grid item md={12}>
                <Typography variant="body1" color="primary" className={classes.secure}>SECURE / FAST / RELIABLE</Typography>
            </Grid>
            <Grid item md={6}>
                <Typography variant="h2" className={classes.title}>Products Engineered For Success</Typography>
            </Grid>
            <Grid item md={12}>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                        <ContainedButton endIcon={<ArrowForwardIcon/>}>Get A Quote</ContainedButton>
                    </Grid>
                    <Grid item>
                        <OutlinedButton endIcon={<ArrowForwardIcon/>}>Learn More</OutlinedButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Heading;
