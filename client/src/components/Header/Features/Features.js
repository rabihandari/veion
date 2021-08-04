import React from 'react'
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Link } from '@material-ui/core'

import useStyles from './styles'
import GradientCard from '../../shared/Cards/GradientCard/GradientCard'
import LockIcon from '../../../images/ic_lock.svg'
import TrustIcon from '../../../images/ic_trust.svg'
import ScalableIcon from '../../../images/ic_scalable.svg'
import UserExpIcon from '../../../images/ic_userexp.svg'

const features = [
    {
        image: LockIcon,
        title: 'Complete Security',
        body: 'We make sure to keep your endpoints secure from any security leaks and ensure zero‑day threats',
    },
    {
        image: TrustIcon,
        title: 'Proven Trustworthy',
        body: 'Trust is our priority. We believe that a business will thrive, flourish and succeed only by building trust',
    },
    {
        image: ScalableIcon,
        title: 'Endless Scalability',
        body: 'Going from small to big has never been an issue. Our scalability soolutions always filts your business needs ',
    },
    {
        image: UserExpIcon,
        title: 'User Experience',
        body: 'We set clarity and creativity in our designs, creating for users an engjoyable experience',
    },
    {
        image: LockIcon,
        title: 'Quality Assurance',
        body: 'Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.',
    },

]

const Heading = () => {
    const classes = useStyles();
    const history = useHistory();
  
    return (
        <Grid container spacing={5} className={classes.container} justify="center">
            <Grid item sm={6} md={4}>
                <Typography variant="h4" className={classes.title}>Powerful Features</Typography>
                <Typography variant="body1">Veion offers our customers a wealth of technical and business expertise along side with powerful features</Typography>
            </Grid>
            {features.map((feature, index) => (
                <Grid item sm={6} md={4} key={feature.title} data-aos="fade-up" data-aos-duration={(index+1) * 300} onClick={ () => {history.push('/about-us')}}>
                    <GradientCard>
                        <Grid container direction="column" spacing={2} className={classes.cardContainer}>
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
