import React, { useState } from 'react';
import { Container, Typography, Grid, Divider } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles';
import ApplicationDialog from './ApplicationDialog/ApplicationDialog';
import ContainedButtonV2 from '../shared/Buttons/Contained/ContainedButtonV2';

const jobs = [
    {
        title: 'Sales Executive',
        description: 'Needed an experienced sales executive'
    },
    {
        title: 'Sales Person',
        description: 'Needed an experienced sales person'
    },
    {
        title: 'IOS Developer',
        description: 'Needed an experienced IOS developer'
    },
    {
        title: 'UI/UX Designer',
        description: 'Needed an experienced UI/UX designer'
    },
];

const CareerOpportunites = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container>
                <Typography variant="h3" className={classes.title}>Career Opportunities</Typography>
                <Grid container direction="column" className={classes.opportunitiesContainer}>
                    {jobs.map(job => (
                        <Job key={job.title} job={job}/>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CareerOpportunites;

const Job = (props) => {
    const classes = useStyles();
    const [applicationOpen, setApplicationOpen] = useState(false);

    const handleClickOpen = () => {
        setApplicationOpen(true);
      };
    
      const handleClose = () => {
        setApplicationOpen(false);
      };

    return(
        <>
            <div>
                <Grid container justify="space-between" alignItems="center" className={classes.job} spacing={5}>
                    <Grid item>
                        <Typography variant='h6'>{props.job.title}</Typography>
                        <Typography variant='body1'>{props.job.description}</Typography>
                    </Grid>
                    <Grid item>
                        <ContainedButtonV2 endIcon={<ArrowForwardIcon/>} onClick={handleClickOpen}>Apply Now</ContainedButtonV2>
                    </Grid>
                </Grid>
                <Divider className={classes.divider}/>
            </div>
            <ApplicationDialog open={applicationOpen} handleClose={handleClose} job={props.job}/>
        </>
    );
}