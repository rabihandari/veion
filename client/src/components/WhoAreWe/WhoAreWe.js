import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

import useStyles from './styles';

const stats = [
    {
        title: 'Lebanon',
        description: 'Place we were founded'
    },
    {
        title: '2019',
        description: 'Year we were founded'
    },
    {
        title: '9/10',
        description: 'Customer Satisfaction'
    },
    {
        title: '90%',
        description: 'Retention after development '
    },
]

const WhoAreWe = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
            <Container>
                <Grid container justify="space-around">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" className={classes.title}>Who Are We?</Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography className={classes.desc}>Veion is a global software engineering company dedicated to add value to your business. Because of our vast knowledge and highly talented expertise we are able to offer solutions that meet your objective well within your target budget.</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.valuesContainer}>
                        <Grid container justify="space-around" alignItems="center" spacing={4}>
                            {stats.map(stat => (
                                <Grid item xs={12} sm={6} md={3} key={stat.description} className={classes.statContainer}>
                                    <div style={{ margin: 'auto' }}>
                                        <Typography variant="h4" className={classes.valueTitle}>{stat.title}</Typography>
                                        <Typography className={classes.valueDesc}>{stat.description}</Typography>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default WhoAreWe;