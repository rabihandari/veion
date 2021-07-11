import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core'

import useStyles from './styles';
import SolidCard from '../shared/Cards/SolidCard/SolidCard';
import ScheduleIcon from '../../images/ic_schedule.svg';
import SalartIcon from '../../images/ic_salary.svg';
import OpportunityIcon from '../../images/ic_opportunity.svg';

const benefits = [
    {
        image: ScheduleIcon,
        title: 'Flexible Schedule',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: SalartIcon,
        title: 'Competative Salary',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: OpportunityIcon,
        title: 'Great Opportunities',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
];

const CareerBenefits = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Typography variant="h3" className={classes.title}>Our Benefits</Typography>
                <Grid container justify="space-around" className={classes.cardsContainer} spacing={3}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={benefit.title} data-aos="fade-right" data-aos-duration={600} data-aos-delay={(index+1) * 200}>
                            <SolidCard style={{ height: 'auto' }}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <img src={benefit.image} alt="lock" height="50" className={classes.cardImage}/>
                                    </Grid>
                                    <Grid item>
                                        <div className={classes.cardTitleContainer}>
                                            <Typography variant="h5" className={classes.cardTitle}>{benefit.title}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ marginBottom: '20px' }}>{benefit.body}</Typography>
                                    </Grid>
                                </Grid>
                            </SolidCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CareerBenefits;