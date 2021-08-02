import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

import useStyles from './styles';
import SolidCard from '../shared/Cards/SolidCard/SolidCard';

import SecurityIcon from '../../images/ic_lock.svg';
import UserExpIcon from '../../images/ic_userexp.svg';
import ScalabilityIcon from '../../images/ic_scalable.svg';


const solutions = [
    {
        image: SecurityIcon,
        title: 'Unparalleled data security',
        body: 'We have a proven experience working with important regulations and standards in Healthcare, Fintech, Voice, and other data-sensitive domains: HIPAA, GDPR, OWASP etc',
    },
    {
        image: UserExpIcon,
        title: 'Outstanding user experience',
        body: 'Before starting the project, we delve into your needs and limitations to build an engaging solution that will be pleasant in use while providing an extensive set of features to cover all users’ requirements.',
    },
    {
        image: ScalabilityIcon,
        title: 'Seamless & endless scalability',
        body: 'We apply the best practices to build rock-solid web architecture with strong business logic. This way, our developers ensure uninterrupted performance of your software across all devices',
    },
]

const WebSolutions = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Typography variant="h3" className={classes.title}>Our Web Solutions</Typography>
                <Grid container justify="space-around" className={classes.cardsContainer} spacing={3}>
                    {solutions.map((solution, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={solution.title} data-aos="fade-right" data-aos-duration={600} data-aos-delay={(index+1) * 200}>
                            <SolidCard borderless="true" style={{ height: 'auto' }}>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <div className={classes.cardTitleContainer}>
                                            <img src={solution.image} alt="lock" height="35" className={classes.cardImage}/>
                                            <Typography variant="h5" className={classes.cardTitle}>{solution.title}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" className={classes.cardBody}>{solution.body}</Typography>
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

export default WebSolutions;