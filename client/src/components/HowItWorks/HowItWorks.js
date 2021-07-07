import React  from 'react'
import { Grid } from '@material-ui/core'

import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import StepsIndicators from '../shared/StepsIndicators/StepsIndicators'

const steps = [
    {
        title: 'Talk to One of Our Industry Experts',
        description: 'An expert on our team will work with you to understand your goals, technical needs, and team dynamics.',
    },
    {
        title: 'Work With Hand Selected Talent',
        description: 'Within days, we\'ll introduce you to the right talent for your project. Average time to match is under 24 hours.',
    },
    {
        title: 'The Right Fit, Guaranteed',
        description: 'Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.',
    },
]

const HowItWorks = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.mainContainer}>
            <Container>
                <Typography variant='h3' className={classes.title}>How It Works</Typography>
                <Typography varitan="body1" className={classes.subtitle}>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</Typography>
                <Grid container className={classes.stepsContainer}>
                    <Grid item md={12} style={{ width: '100%'}}>
                        <StepsIndicators steps={steps} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HowItWorks