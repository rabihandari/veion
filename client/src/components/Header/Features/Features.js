import React, { useEffect } from 'react'
import { Typography, Grid, Link } from '@material-ui/core'
import AOS from 'aos';
import "aos/dist/aos.css";

import useStyles from './styles'
import GradientCard from '../../shared/Cards/GradientCard/GradientCard'
import LockIcon from '../../../images/ic_lock.svg'
import TrustIcon from '../../../images/ic_trust.svg'
import ScalableIcon from '../../../images/ic_scalable.svg'

const features = [
    {
        image: LockIcon,
        title: 'Complete Security',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: TrustIcon,
        title: 'Proven Trustworthy',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: ScalableIcon,
        title: 'Endlessly Scalable',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: LockIcon,
        title: 'Complete Security4',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },
    {
        image: LockIcon,
        title: 'Complete Security5',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },

]

const Heading = () => {
    const classes = useStyles()

    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true
        });
    }, [])
  
    return (
        <Grid container spacing={5} className={classes.container} justify="center">
            <Grid item sm={6} md={4}>
                <Typography variant="h4" className={classes.title}>Powerful Features</Typography>
                <Typography variant="body1">Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis.</Typography>
            </Grid>
            {features.map((feature, index) => (
                <Grid item sm={6} md={4} key={feature.title} data-aos="fade-up" data-aos-duration={(index+1) * 300}>
                    <GradientCard>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <img src={feature.image} alt="lock" width="40" className={classes.cardImage}/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" className={classes.cardTitle}>{feature.title}</Typography>
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
                    </GradientCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default Heading;
