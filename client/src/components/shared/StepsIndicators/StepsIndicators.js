import React, { useEffect } from 'react';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@material-ui/core/styles'
import AOS from 'aos';
import "aos/dist/aos.css";

import useStyles from './styles'

const StepsIndicators = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      })

    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])

    const steps_numbers = props.steps.map((step, i) => (
        <Grid item key={i}>
            <Grid container alignItems="center">
                {(inView && i === 0) &&
                    <div className={classes.grayLine} style={{ animationDelay: `${(i)*0.5}s` }}></div>
                }
                <div className={classes.circle} >
                    <Typography className={classes.number}>{i + 1}</Typography>
                </div>
                {(inView && i < props.steps.length -1 && i >= 0) &&
                    <div className={classes.blueLine} style={{ animationDelay: `${(i+1)*0.6}s` }}></div>
                }
                {(inView && i === props.steps.length - 1) &&
                    <div className={classes.grayLine} style={{ animationDelay: `${(i+2)*0.5}s` }}></div>
                }
            </Grid>
        </Grid>
    ))

    const steps_numbers_vertical = props.steps.map((step, i) => (
        <Grid item key={i}>
            <Grid container alignItems="center" direction="column">
                {(inView && i === 0) &&
                    <div className={classes.verticalGrayLine} style={{ animationDelay: `${(i)*0.4}s` }}></div>
                }
                <div className={classes.circle} >
                    <Typography className={classes.number}>{i + 1}</Typography>
                </div>
                {(inView && i < props.steps.length -1 && i >= 0) &&
                    <div className={classes.verticalBlueLine} style={{ animationDelay: `${(i+1)*0.5}s` }}></div>
                }
                {(inView && i === props.steps.length - 1) &&
                    <div className={classes.verticalGrayLine} style={{ animationDelay: `${(i+2)*0.4}s` }}></div>
                }
            </Grid>
        </Grid>
    ))

    const steps_desc = props.steps.map((step, i) => (
        <Grid item key={i} data-aos={matches ? "fade-left" : "fade-up"} data-aos-duration={1000} data-aos-delay={(i) * 600}>
            <Grid container alignItems="center" style={{ width: '100%'}}>
                {(inView) &&
                    <div>
                        <StepDescription step={step}/>
                    </div>
                }
            </Grid>
        </Grid>
    ))

    return(
        <Grid container ref={ref} justify="space-between">
            <Grid item xs={2} sm={12} className={classes.stepsContainer}>
                <Grid container justify="center" direction={matches ? "column" : "row"}>
                    {matches ? steps_numbers_vertical.map(step => (step)) : steps_numbers.map(step => (step))}
                </Grid>
            </Grid>
            <Grid item xs={8} sm={12} className={classes.stepsContainer}>
                <Grid container justify="center" direction={matches ? "column" : "row"} spacing={5} style={{ overflow: 'hidden' }}>
                    {steps_desc.map(step => (step))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StepsIndicators


const StepDescription = ({ step }) => {
    const classes = useStyles();

    return(
        <Grid item className={classes.stepDescriptionContainer}>
            <Typography variant="h6" className={classes.stepTitle}>{step.title}</Typography>
            <Typography variant="body2" className={classes.stepDesc}>{step.description}</Typography>
        </Grid>
    );
}