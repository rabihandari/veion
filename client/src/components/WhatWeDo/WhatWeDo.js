import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core'
import "aos/dist/aos.css";
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import SolidCard from '../shared/Cards/SolidCard/SolidCard';
import AndroidIcon from '../../images/ic_android.svg';
import IOSIcon from '../../images/ic_ios.svg';
import WebistesIcon from '../../images/ic_website.svg';
import CustomIcon from '../../images/ic_custom.svg';

const features = [
    {
        image: AndroidIcon,
        title: 'Android Development',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: IOSIcon,
        title: 'IOS Development',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: WebistesIcon,
        title: 'Website Development',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: CustomIcon,
        title: 'Custom Development',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
];

const VRMS = () => {
    const classes = useStyles();
    const history = useHistory();

    const goToWhatWeDo = () => {
        history.push('/what-we-do')
    }
    
    return(
        <div className={classes.mainContainer}>
            <Container>
                <Typography variant="h3" className={classes.title}>What We Do</Typography>
                <Typography variant="body1" className={classes.subTitle}>We listen to your ideas and create software solutions from the ground up, designed especially for your business</Typography>
                <Grid container spacing={3} className={classes.container}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={feature.title} data-aos="fade-right" data-aos-duration={600} data-aos-delay={(index+1) * 200}>
                            <SolidCard style={{ cursor: 'pointer' }} onClick={goToWhatWeDo}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <img src={feature.image} alt="lock" height="50" className={classes.cardImage}/>
                                    </Grid>
                                    <Grid item>
                                        <div className={classes.cardTitleContainer}>
                                            <Typography variant="h5" className={classes.cardTitle}>{feature.title}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">{feature.body}</Typography>
                                    </Grid>
                                    <Grid item style={{ padding: '20px 10px' }}>
                                        <Link href="#" onClick={() => {}}>
                                            <Typography variant="body1" color="primary" className={classes.learnMore} >Learn more »</Typography>
                                        </Link>
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

export default VRMS;