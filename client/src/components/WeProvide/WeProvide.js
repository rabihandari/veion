import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core'

import useStyles from './styles'
import QualityIcon from '../../images/ic_quality.svg';
import AuthenticityIcon from '../../images/ic_authenticity.svg';
import TransparencyIcon from '../../images/ic_transparency.svg';
import ServiceIcon from '../../images/ic_service.svg';


const values = [
    {
        title: 'Best Quality',
        icon: QualityIcon,
    },
    {
        title: 'Authenticity',
        icon: AuthenticityIcon,
    },
    {
        title: 'Transparency',
        icon: TransparencyIcon,
    },
    {
        title: '24/7 Service',
        icon: ServiceIcon,
    },
]

const WeProvide = () => {
    const classes = useStyles()
  
    return (
        <div className={classes.container}>
            <Container>
                <Grid container justify="space-around">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" className={classes.title}>What we do? We provide</Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography className={classes.desc}>We collaboratively administrate empowered markets through existing channels and new opportunities on the horizon. We can quickly maximize the timely deliverables for real-time presentations to deliver outstanding ROI.</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.valuesContainer}>
                        <Grid container justify="space-around" alignItems="center">
                            {values.map(value => (
                                <Grid item xs={6} sm={3} key={value.title} style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <img src={value.icon} alt={value.title} height="50" />
                                    <Typography className={classes.valueText}>{value.title}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default WeProvide;
