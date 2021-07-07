import React, { useEffect } from 'react';
import { Grid, Typography, Container } from '@material-ui/core'
import "aos/dist/aos.css";
import AOS from 'aos';

import useStyles from './styles'

import WebisteImage from '../../images/website_development_image.jpg';
import Mobilemage from '../../images/mobile_development_image.jpg';
import CustomImage from '../../images/custom_development_image.jpg';
import PlanningImage from '../../images/planning_image.jpg';
import CrossPlatformImage from '../../images/cross_platform_image.jpg';

const features = [
    {
        image: WebisteImage,
        title: 'Websites Development',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
    {
        image: Mobilemage,
        title: 'Mobile Development',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
    {
        image: CustomImage,
        title: 'Custom Development',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
    {
        image: CustomImage,
        title: 'UI/UX Development',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
    {
        image: PlanningImage,
        title: 'DevOps Planning',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
    {
        image: CrossPlatformImage,
        title: 'Cross-Platform Development',
        description: 'We\'ve created, engineered, and delivered software solutions for U.S. companies in almost every industry. Syberry customers get the best results every time because of our passion, expertise, and experience.'
    },
];

const WhatWeDoV2 = () => {
    const classes = useStyles()
  
    useEffect(() => {
        AOS.init({
            duration : 500,
            once: true
        });
    }, [])

    return (
        <div className={classes.container}>
            <Container>
                <Typography variant="h3" className={classes.title}>Our Services</Typography>
                <Grid container alignItems="center" spacing={5} className={classes.itemsContainer}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} className={classes.infoContainer} key={feature.title} data-aos="fade-up" data-aos-delay={(index+1) * 100}>
                            <img src={feature.image} alt={feature.title} className={classes.image}/>
                            <div className={classes.itemDescContainer}>
                                <Typography variant="h5" className={classes.itemTitle}>{feature.title}</Typography>
                                <Typography variant="body1" style={{ marginTop: '20px' }}>{feature.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default WhatWeDoV2;
